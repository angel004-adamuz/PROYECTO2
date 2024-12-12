require('dotenv').config();
const axios = require('axios');

const apiKey = process.env.API_KEY;
const endpoint = 'https://api-football-v3.p.rapidapi.com/v3/fixtures';

axios.get(endpoint, {
  headers: {
    'X-RapidAPI-Key': apiKey,
    'X-RapidAPI-Host': 'api-football-v3.p.rapidapi.com'
  }
})
.then(response => {
  console.log(response.data);
})
.catch(error => {
  console.error(error);
});