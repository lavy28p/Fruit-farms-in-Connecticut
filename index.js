
const domain = 'https://data.ct.gov/resource/y6p2-px98.json?category=Fruit';

const itemsArray = [];
let uniqueItemsArray = [];
let farmName = [];
let farmSite = [];
let farmAddr = [];



/* 1.Fetch fruit items list from api using axios call. 
   2.Push the fruit items to an array 
   3.Filter unique fruit items to a new array   
*/

const fetchData = async () => {
  try {
   
    const getInfo = await axios.get(domain);
    const farmInfo = getInfo.data;
    console.log(farmInfo);
    const finalInfo = farmInfo.slice(0,200);
    console.log(finalInfo);
    
    finalInfo.forEach((array) => {     

      const item_name = array.item;
      itemsArray.push(item_name);
     
   });
   
   uniqueItemsArray = [...new Set(itemsArray)];
   
   addItem(uniqueItemsArray);

  } catch (error) {
    console.error(error.message);
  }
}


/* 1.Add unique fruit items from the array to the  drop down list in dom
*/

const addItem = (fruits) => {
  fruits.forEach((fruit) => {
    const dropDown = document.querySelector('#fruits-list'); 
    const optionItem = document.createElement('option');
    optionItem.classList.add(fruit);
    optionItem.innerText = fruit;
    dropDown.appendChild(optionItem);
  });
}


/* 1.Add an event listener to search button 
   2.Get the value of fruit item picked
*/

const submit = document.querySelector('#submit-button');

submit.addEventListener('click', (e) => {
  e.preventDefault();
  const selectItem = document.getElementById('fruits-list');
  const itemChoice = selectItem.value;
  fetchFarmData(itemChoice); 
  
});



/* 1.Axios call to fetch all the farm info for each fruit item choice 
   2.Push the farm name, url and address to seperate arrays
*/

const fetchFarmData = async (itemChoice) => {
  const item_url = `${domain}&item=${itemChoice}`;
  try {

    const getInfo = await axios.get(item_url);
    const farmsInfo = getInfo.data.slice(0,200);
    console.log(farmsInfo);
    
    farmsInfo.forEach((farm) => { 
      if (farm.farm_name && farm.website && farm.location_1_address) {
        const fName = farm.farm_name;
        const fSite = farm.website.url;
        const fAddr = `${farm.location_1_address},${farm.location_1_city},${farm.location_1_state},${farm.location_1_zip}`;
        
        farmName.push(fName);
        farmSite.push(fSite);
        farmAddr.push(fAddr);
        
      } 
   });

   addFarmInfo(farmName,farmSite,farmAddr);
   
  } catch(error) {
    console.error(error.message);

  }
}

/* 1.Create DOM elements for Farm Name, URL and Address
*/

const addFarmInfo = (nameArr,siteArr,addrArr) => {

  const div_Info = document.querySelector('#farm-info');
 
  for (let i = 0; i < nameArr.length; i++) {

    const f_Name = document.createElement('p');
    f_Name.classList.add('farm-name');
    f_Name.innerText = nameArr[i];
    div_Info.appendChild(f_Name);
    const f_Site = document.createElement('a');
    f_Site.classList.add('farm-url');
    f_Site.innerText = siteArr[i];
    f_Site.href = siteArr[i];
    div_Info.appendChild(f_Site);
    const f_Addr = document.createElement('div');
    f_Addr.classList.add('farm-addr');
    f_Addr.innerText = addrArr[i];
    f_Name.appendChild(f_Addr);

  }  

 }
 

/* 1.Call the Main function 
*/

fetchData();
