//import axios from 'axios';
const axios = require('axios');

function pingLocalhost() {
    return axios.get('http://localhost:8080/ping');
};

function hola(){
  return "mensaje";
}

async function getContent( res ) {
  const response = await axios.get('http://localhost:8080/ping',
                    {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                  }).then( function(result){
                    console.log(result.data);
                    res.send(result.data);
                  } ).catch( error => console.log(error) );
}

module.exports = { pingLocalhost, hola, getContent };
