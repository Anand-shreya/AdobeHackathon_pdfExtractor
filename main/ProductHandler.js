const fs = require("fs");
fs.writeFileSync('Products.json',JSON.stringify({product:[]}),e=>{
    console.log(e);
});