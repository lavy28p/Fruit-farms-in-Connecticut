
const domain = 'https://data.ct.gov/resource/y6p2-px98.json?category=Fruit';

const itemsArray = [];
let uniqueItemsArray = [];
let farmName = [];
let farmSite = [];
let farmAddr = [];



/***********  Fetch item list and farm info from api using axios call **********/

const fetchData = async () => {
  try {
   
    const getInfo = await axios.get(domain);
    const farmInfo = getInfo.data;
    console.log(farmInfo);
    const finalInfo = farmInfo.slice(0,200);
    console.log(finalInfo);
    
    //get item name and push to array
    finalInfo.forEach((array) => {     

      const item_name = array.item;
      itemsArray.push(item_name);
     
   });
   
   //get unique items to add in dropdown list
   uniqueItemsArray = [...new Set(itemsArray)];
   
   addItem(uniqueItemsArray);

  } catch (error) {
    console.error(error.message);
  }
}


/********* Dynamically add unique item value from api to drop down list *********/

const addItem = (fruits) => {
  fruits.forEach((fruit) => {
    const dropDown = document.querySelector('#fruits-list'); 
    const optionItem = document.createElement('option');
    optionItem.classList.add('item-choice');
    optionItem.innerText = fruit;
    dropDown.appendChild(optionItem);
  });
}


/********************** Add an event listener to search *************************/

const submit = document.querySelector('#submit-button');

submit.addEventListener('click', (e) => {
  e.preventDefault();
  const itemChoice = document.querySelector('.item-choice').value;
  console.log(itemChoice);
  fetchFarmData(itemChoice); 
  
});



/******************** Display info of all farms for that item *******************/

const fetchFarmData = async (itemChoice) => {
  const item_url = `${domain}&item=${itemChoice}`;
  try {

    const getInfo = await axios.get(item_url);
    const farmsInfo = getInfo.data.slice(0,200);
    console.log(farmsInfo);
    
    //get farm name, url and address
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

fetchData();





