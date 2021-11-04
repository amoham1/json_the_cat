const request = require('request');

let userInput = process.argv[2];


request(`https://api.thecatapi.com/v1/breeds/search?q=${userInput}`, (error,response, body) =>{
  if (error) {
    console.log('Print the error: ', error);
    return;
  }
  const data = JSON.parse(body);
  if (data[0] === undefined) {
    console.log("that cat doesn't exist");
  } else {
    console.log(`${data[0].description}`);
  }
});