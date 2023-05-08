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
        res.status(200).redirect('/products')

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
        /* res.json({
            resp
        }); */

        res.render('v-product/updateProduct', { resp })

    } catch (error) {
        console.log(`Error en Controlador Producto--> El error es ------>${error}`);
        res.status(500);
        res.send(error.message);
    }
};

const updateProduct = async (req, res) => {
    const { 
        refProducto,
        nomProducto,
        categoriaProducto,
        descripcion,
        valorUnitario,
        marca,
        modelo } = req.body
    try {
        const pool = await getConnection();
        await pool.request()
            .input('refProducto', refProducto)
            .input('nomProducto', sql.VarChar, nomProducto)
            .input('categoriaProducto', sql.VarChar, categoriaProducto)
            .input('descripcion', sql.VarChar, descripcion)
            .input('valorUnitario', sql.Int, valorUnitario)
            .input('marca', sql.VarChar, marca)
            .input('modelo', sql.VarChar, modelo)
            .query(queryBd.ProductQuery.updateProducto)

       res.status(200).redirect('/update_product')
        console.log(`Registro actualizado tiene Referencia ${refProducto}`)

    } catch (error) {
        console.log(`Error en Controlador Producto--> El error es ------>${error}`);
        res.status(500);
        res.send(error.message);
    }


/* 

    const { idPermiso, id_empleado, motivo_permiso, fecha_inicio, fecha_fin, observaciones } = req.body
    try {
      const pool = await connectionBd.getConnection();
      await pool.request()
        .input('id', idPermiso)
        .input('id_empleado', connectionBd.sql.Int, id_empleado)
        .input('motivo_permiso', connectionBd.sql.VarChar, motivo_permiso)
        .input('fecha_inicio', connectionBd.sql.Date, fecha_inicio)
        .input('fecha_fin', connectionBd.sql.Date, fecha_fin)
        .input('observaciones', connectionBd.sql.Text, observaciones)
        .query(queryBd.queriesPermisos.updatePermiso);
  
      console.log('Update')
      res.render('permisos/updatePermiso');
    } catch (error) {
      console.log(`El error es ------>${error}`);
      res.status(500);
      res.send(error.message);
    }
 */

}


module.exports = {
    insertProduct,
    findByRefProducto,
    updateProduct
};


