const { response } = require('express');

const modelCustomer = require('../models/customer');


const customerPost = async (req, res = response) => {
    console.clear();
    const {
        pNombre,
        sNombre,
        pApellido,
        sApellido,
        fechaNacimiento,
        tIdentificacion,
        nIdentificacion,
        email,
        indiccativoPais,
        tContacto,
        password } = req.body;

    const customer = new modelCustomer({
        pNombre,
        sNombre,
        pApellido,
        sApellido,
        fechaNacimiento,
        tIdentificacion,
        nIdentificacion,
        email,
        indiccativoPais,
        tContacto,
        password
    });


    const clienteRegistrado = await modelCustomer.findOne({ nIdentificacion }) // esta linea busca en la base de datos si existe este correo
    const emailRegistrado = await modelCustomer.findOne({ email });

    if (emailRegistrado || clienteRegistrado) {
        return res.status(400).json({ msg: 'Cliente Ya Registrado' });
    }


    try {
        

        await customer.save();
        res.render('v-login/login')

    } catch (error) {
        console.log(`El error es ------>${error}`);
        res.status(500);
        res.send(error.message);

        console.log(emailRegistrado);
    }

}




module.exports = {
    customerPost
}

















/* de aca para abajo era prueba para guardar en SQL */

//const sql = require('mssql');

/* const { getConnection, sql } = require('../database/connectionBD');


const queryBd = require('../database/queryBd'); */

/* const conexionQuery = conection(); */

/* conection(); */
/* getConnection(); */


/* const pruebaInsert = async (req, res) => {
    const { id, nombre } = req.body
    try {

        const pool = await getConnection();
        await pool.request()
            .input('id', sql.Int, id)
            .input('nombre', sql.VarChar, nombre)
            //.query('INSERT INTO prueba (id,nombre) VALUES (@id, @nombre)')
            .query(queryBd.Prueba.addPrueba)

        console.log(req.body)
       //res.render('empleados/insert'); 
        console.log('Registro guardado')

    } catch (error) {
        console.log(`El error es ------>${error}`);
        res.status(500);
        res.send(error.message);
    }
}


module.exports = { pruebaInsert };
 */

