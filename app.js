const lib = require("./axios");
//const axios = require('axios');

const express = require('express'); // Importa Express
const app = express(); // Crea una aplicación Express
const PORT = 3000; // Define el puerto en el que correrá la aplicación

// Middleware para manejar JSON
app.use(express.json());

// Define una ruta básica
app.get('/api', (req, res) => {
    //res.send(lib.hola());
    const val = lib.getContent( res );
    //res.send( val );
    //res.send('¡Hola, mundo!'); // Responde con un mensaje
});

app.get("/", (req, res) => {
  res.render("index");
});

// Define otra ruta
app.get('/api/saludo', (req, res) => {
    res.json({ mensaje: '¡Bienvenido a mi aplicación Express!' }); // Responde con un objeto JSON
});

// Inicia el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`); // Mensaje de confirmación
});
