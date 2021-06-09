const domain = 'https://data.ct.gov/resource/y6p2-px98.json?category=Fruit';

//fetch date from api
const fetchData = async () => {
  try {
    const getInfo = await axios.get(domain);
    const farmInfo = getInfo.data;
    console.log(farmInfo);
    const finalInfo = farmInfo.slice(0,200);
    
    
    console.log(finalInfo);
    
    finalInfo.forEach((array) => {
      
      if (array.farm_name && array.website ) {
        const item_name = array.item;
        console.log(`item : ${item_name}`);

        addItem(item_name);

        const farm = array.farm_name;
        console.log(`Farm name : ${farm}`);
        
        const website = array.website.url;
        console.log(`url : ${website}`);

        const address = `${array.location_1_address},${array.location_1_city},${array.location_1_state},${array.location_1_zip}`;
        console.log(`Address : ${address}`);
        
      } 
   });

  } catch (error) {
    console.error(error.message);
  }
}

fetchData();

//dynamic get item value from api and add it in the in the dop down
const addItem = (item_name) => {
  const dropDown = document.querySelector('#fruits'); 
  const optionItem = document.createElement('option');
  optionItem.innerText = item_name;
  dropDown.appendChild(optionItem);

}

//pick a value on drop down 
// when clicked search , display farm names

