require('dotenv').config();

const express = require('express');
const cors = require('cors');

const { dbConnection } = require('./database/config');

// Crear el servidor de express
const app = express();

// Configurar CORS
app.use( cors() );

// Lectura y parseo del body
app.use( express.json() );

// Base de datos
dbConnection();


// Rutas
app.use( '/api/usuarios', require('./routes/usuarios') );
app.use( '/api/login', require('./routes/auth') );



app.listen( process.env.PORT, () => {
    console.log('Servidor corriendo en puerto ' + process.env.PORT );
});

//Ejecutar servidor
//npm run start:dev

//Nombre de usuario: mean_user
//Contraseña:oDEoXfkcUGxC8Wtk

//mongodb+srv://mean_user:oDEoXfkcUGxC8Wtk@cluster0.1s2gadr.mongodb.net/test
//mongodb+srv://mean_user:oDEoXfkcUGxC8Wtk@cluster0.1s2gadr.mongodb.net/hospitaldb
// ip:152.169.186.63