 /* import sql from 'mssql';  */

 const sql = require('mssql'); 

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
 module.exports={getConnection, sql}; 

/* export {sql} */


