const request = require("request");
const searchQuery = process.argv.slice(2, 3);
const URL = `https://api.thecatapi.com/v1/breeds/search?q=${searchQuery}`;


request(URL, (error, response, body) => {
  if (error) {
    console.log(`Your request failed with code ${error.errno}: ${error.code}`);
  }
  
  if (!error) {
    const data = JSON.parse(body);
    if (data.length) return console.log(data[0].description);
    console.log('Error: breed not found as specified please try again');
  }
});

