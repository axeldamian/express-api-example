//import axios from 'axios';
const axios = require('axios');

const http = axios.create({
  baseUrl: 'https://www.google.com'
});

function getContent(userId) {
  console.log(userId);
  return http.get('/search', {
  params : {
    q : "asd"
  }
  });
}

module.exports = { getContent };
