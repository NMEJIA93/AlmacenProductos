
require('dotenv').config();

const Server= require('./server');
const server = new Server();

server.listen();

console.log('Inicion de aplicacion desde el archivo app');























/* require('dotenv').config();
const Server= require('./server1');
/* const server = new Server(); */
/* console.log('Inicion de aplicacion archivo APP') */

/* 
const Server= require('./server1')


Server.listen(Server.get('port'));



console.log('Inicion de aplicacion archivo app')


 */

// Opcion 2 Servidor en forma de Clase





/* const sql = require('mssql');

const dbSettings = {
    user: 'sa',
    password: 'asdf123.',
    server: 'localhost',
    database: 'Empresa',
    options: {
        encrypt: true,
        trustServerCertificate: true
    }
}

const getConnection = async () => {
    try {
        const pool = await sql.connect(dbSettings);
        console.log('Conexion Exitosa');
        return pool;

    } catch (error) {
        console.log(`El error es ${error}`);
        console.log('error en el archivo de conexion');
    }
}

getConnection();

 */




 