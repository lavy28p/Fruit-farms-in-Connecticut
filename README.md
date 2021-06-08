# Project Overview

## Project Name
Fruit-farms-in-Connecticut

## Project Description
Pick a fruit and search for farms which sells that fruit in Connecticut 

## Wireframe
https://whimsical.com/copy-of-3vC3s448eJg1Ce6eYYyUrN

![image](https://user-images.githubusercontent.com/84349667/121120328-f7de2800-c7e2-11eb-8595-6ced56890410.png)


### MVP/PostMVP
#### MVP
- Pick a value from dropdown
- Click Search
- Axios call on connecticut government API with fruits category
- Displays Farm name, url and address that sells that fruit
- Clears the previous results when search next item

#### PostMVP
- A map feature to display with the farm address location
- If we click the website url, takes to the farm's website page


## API and Data Sample
https://data.ct.gov/resource/y6p2-px98.json?category=Fruit&item=Peaches

```JSON
[
  {
    "farm_name": "Karabin Farms",
    "category": "Fruit",
    "item": "Peaches",
    "farmer_id": "7243",
    "website": {
      "url": "http://www.karabinfarms.com"
    },
    "zipcode": "06489",
    "phone1": "860-620-0194",
    "business": "Karabin Farms",
    "l": "13",
    "location_1": {
      "type": "Point",
      "coordinates": [
        -72.82920259099967,
        41.61609643000048
      ]
    },
    "location_1_address": "894 Andrews Street",
    "location_1_city": "Southington",
    "location_1_state": "CT",
    "location_1_zip": "06489"
  },

