
# EXTRACTING INFORMATION FROM PDF INVOICES

Effortlessly extract information trapped in PDF invoices. We are using Adobe PDF Services Extract API for extraction and outputting important data in a CSV format.


## Brief Description

1. `main` folder contains all the logical operations.
2. `ProductHandler.js` file creates or initialize the `Products.json` file.
3. `index.js` file Extracts the pdf data as zip files and stores in the `ExtractedZip` folder.
4. `unzip. js` file unzips the extracted zipped files and stores them in the `ExtractedUnzip` folder.
5. `jsonHandler.js` file process the extracted data and store it in `Products.json`.
6. `csvHandler.js` file converts Products.json to CSV.
7. `Products.json` file contains the extracted data in JSON format.
8. `ExtractedProduct.csv` file contains the final output.
## Installation
Run in your local machine terminal
 1. Clone the Repository :
```bash
git clone https://github.com/Anand-shreya/AdobeHackathon_pdfExtractor.git
```
2. Go to folder :
```bash
cd AdobeHackathon_pdfExtractor
```
3.  Install the node Packages :
  ```bash
npm install
```


## Usage

1. To Extract data from Invoices, place all the invoices in the `resources` folder.

2. Update the pdfservices-api-credentials.json file with your Adobe PDF Services API credentials.
3. Run the script to create or update (if it already exists) the `products.json` file.
```bash
npm start
```
4. Run the script to extract JSON data.
```bash
npm run createJson
```
5. Run the script to convert JSON data to a CSV file.
```bash
npm run createCsv
```
## API Reference
1. Documentation of Adobe Acrobat Services APIs
[link](https://developer.adobe.com/document-services/docs/overview/).
2. To generate credentials [link](https://developer.adobe.com/document-services/apis/pdf-extract/).
