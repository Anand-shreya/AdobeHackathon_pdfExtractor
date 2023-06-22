const {Parser} = require('json2csv');
const fs = require("fs");

//Reading extracted Product.json
const data =  fs.readFileSync("Products.json");
let jsonData = JSON.parse(data);
jsonData = jsonData.product;

//Creating csv data
const json2csvParser = new Parser();
const csv = json2csvParser.parse(jsonData);

//saving data in csv file
fs.writeFile("ExtractedProducts.csv",csv,e=>{
    if(e){
        throw e;
    }
    console.log('file conveted to csv');
})


