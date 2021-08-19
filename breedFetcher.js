const request = require('request');

const breedName = process.argv[2];

const breedAPI = `https://api.thecatapi.com/v1/breeds/search/?q=${breedName}`;

request(breedAPI, (error, response, body) => {
  // Check for error with URL first
  if (error) {
    console.log(`Error with URL. ${error}`);
    process.exit();
  }
  
  // Parse the body to JSON format
  const data = JSON.parse(body);
  
  // If the breed does not exist, the API will return an empty array so check for length 0
  if (data.length === 0) {
    console.log('Breed name not found in database.');
    process.exit();
  }
  
  // All filters pass, log out cat description
  console.log(data[0].description);
});