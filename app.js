const lib = require("./axios");

const express = require('express'); // Importa Express
const app = express(); // Crea una aplicación Express
const PORT = 3000; // Define el puerto en el que correrá la aplicación

// Middleware para manejar JSON
app.use(express.json());

// Define una ruta básica
app.get('/', (req, res) => {
    console.log(lib.getContent("asd"));
    res.send('¡Hola, mundo!'); // Responde con un mensaje
});

// Define otra ruta
app.get('/api/saludo', (req, res) => {
    res.json({ mensaje: '¡Bienvenido a mi aplicación Express!' }); // Responde con un objeto JSON
});

// Inicia el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`); // Mensaje de confirmación
});
