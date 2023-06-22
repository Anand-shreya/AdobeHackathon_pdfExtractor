const decompress = require("decompress");

//function to unzip a file
const unzip=async(FileName)=>{
    try{
        const files = await decompress("./ExtractedZip/ExtractTextTableWithTableStructure/extract"+FileName+".zip","./ExtractedUnzip/"+FileName);
        console.log("unziping done");
    }catch(e){
        console.log(e);
    }
};

module.exports = {unzip};