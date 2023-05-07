//const sql = require('mssql');

const { getConnection, sql } = require('../database/connectionBD');
const queryBd = require('../database/queryBd');

/* const conexionQuery = conection(); */

/* conection(); */
/* getConnection(); */


const insertProduct = async (req, res) => {
    const { nomProducto,
        categoriaProducto,
        descripcion,
        valorUnitario,
        refProducto,
        marca,
        modelo } = req.body
    try {

        const pool = await getConnection();
        await pool.request()
            .input('nomProducto', sql.VarChar, nomProducto)
            .input('categoriaProducto', sql.VarChar, categoriaProducto)
            .input('descripcion', sql.VarChar, descripcion)
            .input('valorUnitario', sql.Int, valorUnitario)
            .input('refProducto', sql.VarChar, refProducto)
            .input('marca', sql.VarChar, marca)
            .input('modelo', sql.VarChar, modelo)
            //.query('INSERT INTO prueba (id,nombre) VALUES (@id, @nombre)')
            .query(queryBd.ProductQuery.addProducto)

        console.log(req.body)
        //res.render('empleados/insert'); 
        console.log('Registro guardado')

    } catch (error) {
        console.log(`Error en Controlador Producto--> El error es ------>${error}`);
        res.status(500);
        res.send(error.message);
    }
};

const findByRefProducto = async (req, res) => {
    const { refProducto } = req.body;
    try {
        const pool = await getConnection();
        const result = await pool.request()
            .input('refProducto', sql.VarChar, refProducto)
            .query(queryBd.ProductQuery.findByRefProducto)

        const resp = result.recordset[0];

        if (!resp) {
            //console.log('producto ya registrado')
            return res.json({
                msg: 'Producto no esta registrado'
            });
        }

        console.log(resp)
        //res.render('empleados/insert'); 
        res.json({
            resp
        });

    } catch (error) {
        console.log(`Error en Controlador Producto--> El error es ------>${error}`);
        res.status(500);
        res.send(error.message);
    }
};

const updateProduct = async(req,res)=>{
    
}


module.exports = { insertProduct, findByRefProducto };


