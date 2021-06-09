const domain = 'https://data.ct.gov/resource/y6p2-px98.json?category=Fruit';

//fetch date from api
const fetchData = async () => {
  try {
    const getInfo = await axios.get(domain);
    const farmInfo = getInfo.data;
  // var farmInfo = JSON.parse(domain);
    console.log(farmInfo);
    const finalInfo = farmInfo.slice(2,6);
    
    
    console.log(finalInfo);
    
    finalInfo.forEach((array) => {
      
      if ((typeof array.business != 'undefined')) {
        const item_name = array.item;
        console.log(`item : ${item_name}`);

        const business_name = array.business;
        console.log(`Business name : ${business_name}`);

        const coordinates = array.location_1.type;
        console.log(`Coordinates : ${coordinates}`);
      
        const website = array.website.url;
        console.log(`url : ${website}`);
        
      } 
   });

  } catch (error) {
    console.error(error.message);
  }
}

fetchData();
//dynamic get item value from api and add it in the in the dop down
//pick a value on drop down 
// when clicked search , display farm names

