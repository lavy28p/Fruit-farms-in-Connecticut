# Project Overview

## Project Name
Fruit-farms-in-Connecticut

## Project Description
Pick a fruit and search for farms which sells that fruit in Connecticut 

## Wireframe
https://whimsical.com/copy-of-3vC3s448eJg1Ce6eYYyUrN

### MVP/PostMVP
#### MVP
- Pick a value from dropdown
- Click Search
- Axios call on connecticut government API with fruits category
- Displays Farm name and address that sells that fruit
- Clears the previous results when search next item


## API and Data Sample
https://data.ct.gov/resource/y6p2-px98.json?category=Fruit

```JSON
[
  {
    "category": "Fruit",
    "item": "Grapes",
    "farmer_id": "16722",
    "zipcode": "06247",
    "phone1": "860-455-1351",
    "location_1": {
      "type": "Point",
      "coordinates": [
        -72.03638786699963,
        41.76654268800047
      ]
    },
    "location_1_address": "108 Drain Street",
    "location_1_city": "Hampton",
    "location_1_state": "CT",
    "location_1_zip": "06247"
  },
  {
    "category": "Fruit",
    "item": "Blueberries",
    "farmer_id": "2818",
    "zipcode": "06074",
    "business": "Robert Sr & Nancy Lickwar",
    "l": "0",
    "location_1": {
      "type": "Point",
      "coordinates": [
        -72.62308126799962,
        41.811254944000495
      ]






  




