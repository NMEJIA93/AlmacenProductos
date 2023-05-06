const { response } = require('express');
const bcryptjs = require('bcryptjs');


const modelCustomer = require('../models/customer');


const customerPost = async (req, res = response) => {
    console.clear();
    // desestructurar Campos que se van a recibir del Body
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


        // Creando modelo de usuario con los campos que se van a enviar a Mongo
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

    // esta validacion se paso para la carperta Helpers
    /*  const clienteRegistrado = await modelCustomer.findOne({ nIdentificacion }) // esta linea busca en la base de datos si existe este correo
     const emailRegistrado = await modelCustomer.findOne({ email });
 
     if (emailRegistrado || clienteRegistrado) {
         return res.status(400).json({ msg: 'Cliente Ya Registrado' });
     } */

    // encriptar contraseña
    const salt = bcryptjs.genSaltSync();
    customer.password = bcryptjs.hashSync(password, salt);


    try {
        await customer.save();
        res.render('v-login/login')
        console.log(customer)

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

