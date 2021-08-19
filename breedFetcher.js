const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  const breedAPI = `https://api.thecatapi.com/v1/breeds/search/?q=${breedName}`;
  
  request(breedAPI, (error, response, body) => {
    // Check for error with URL first
    if (error) {
      callback(error, null);
      process.exit();
    }
    
    // Parse the body to JSON format
    const data = JSON.parse(body);
    
    // If the breed does not exist, the API will return an empty array so check for length 0
    if (data.length === 0) {
      callback('Breed name not found in database.', null);
      process.exit();
    }
    
    // All filters pass, log out cat description
    callback(null, data[0].description);
  });
};

module.exports = { fetchBreedDescription };