const { getConnection, sql } = require('../database/connectionBD');
const queryBd = require('../database/queryBd');


const existeRefProduct = async (refProducto = '') => {
    //const { refProducto } = req.body;
    try {
        const pool = await getConnection();
        const result = await pool.request()
            .input('refProducto', sql.VarChar, refProducto)
            .query(queryBd.ProductQuery.findByRefProducto)
        const resp = result.recordset[0];
        if (resp) {
            throw new Error(`La Referencia ${refProducto}, ya esta registrada`);
        }
    } catch (error) {
        console.log(`Error en Archivo db-validatorSQL -> El error es ------>${error}`);

        /* res.status(500);
        res.send(error.message); */
        throw new Error(`El error es ${error}`);
    }




}

module.exports = {
    existeRefProduct
}