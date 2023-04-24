/* require('dotenv').config();
const Server= require('./server1');
/* const server = new Server(); */
/* console.log('Inicion de aplicacion archivo APP') */

// Opcion 2 Servidor en forma de Clase

require('dotenv').config();

const Server= require('./server');

const server = new Server();

server.listen();


console.log('Inicion de aplicacion')


