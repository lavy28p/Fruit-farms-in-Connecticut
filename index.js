const domain = 'https://data.ct.gov/resource/y6p2-px98.json?category=Fruit';

const itemsArray = [];
let uniqueItemsArray = [];

//*** Fetch item list and farm data from api using axios call

const fetchData = async () => {
  try {
    const getInfo = await axios.get(domain);
    const farmInfo = getInfo.data;
    console.log(farmInfo);
    const finalInfo = farmInfo.slice(0,200);
    
    console.log(finalInfo);
    
    finalInfo.forEach((array) => {
      
      if (array.farm_name && array.website ) {
        //get item name 
        const item_name = array.item;
        itemsArray.push(item_name);
        
        //get farm name, url and address
        const farm = array.farm_name;
        const website = array.website.url;
        const address = `${array.location_1_address},${array.location_1_city},${array.location_1_state},${array.location_1_zip}`;
        console.log(`Address : ${address}`);
      } 
   });
   
   //get unique items to add in dropdown list
   uniqueItemsArray = [...new Set(itemsArray)];
   
   addItem(uniqueItemsArray);

  } catch (error) {
    console.error(error.message);
  }
}


//*** Dynamically add unique item value from api to drop down list

const addItem = (fruits) => {
  fruits.forEach((fruit) => {
    const dropDown = document.querySelector('#fruits-list'); 
    const optionItem = document.createElement('option');
    optionItem.innerText = fruit;
    dropDown.appendChild(optionItem);
  });
}


//pick a value on drop down 
// when clicked search , display farm names

fetchData();