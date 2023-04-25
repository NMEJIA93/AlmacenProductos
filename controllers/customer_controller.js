//const sql = require('mssql');

const {getConnection, sql} = require('../database/connectionBD');


const queryBd = require('../database/queryBd');

/* const conexionQuery = conection(); */

/* conection(); */
getConnection();


const pruebaInsert = async (req, res) => {
    const { id, nombre } = req.body
    try {

        const pool = await getConnection();
        await pool.request()
            .input('id', sql.Int, id)
            .input('nombre', sql.VarChar, nombre)
            .query(queryBd.Prueba.addPrueba)

         //console.log(req.body) 
        /* res.render('empleados/insert'); */
        console.log('Registro guardado')

    } catch (error) {
        console.log(`El error es ------>${error}`);
        res.status(500);
        res.send(error.message);
    }
}


module.exports = { pruebaInsert };


