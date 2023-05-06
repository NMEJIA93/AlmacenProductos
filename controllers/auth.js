const { response } = require('express');
const modelCustomer = require('../models/customer');
const modelToken = require('../models/token');

const bcryptjs = require('bcryptjs');
const { generarJWT } = require('../helpers/generar-jwt');
//const ls = require('local-storage');
//const localStorage = require("localStorage")



const login = async (req, res = response) => {
    const { email, password } = req.body;

    try {
        const usuario = await modelCustomer.findOne({ email });

        //verificar si el Email Existe 
        if (!usuario) {
            return res.status(400).json({
                msg: 'Usuario / Password no son correctos - Correo'
            });
        }

        //verificar si el usuario esta Activo
        if (!usuario.estado) {
            return res.status(400).json({
                msg: 'Usuario / Password no son correctos - estado :false'
            });
        }

        // Verificar la contraseña 
        const validPassword = bcryptjs.compareSync(password, usuario.password);
        if (!validPassword) {
            return res.status(400).json({
                msg: 'Usuario / Password no son correctos - Password'
            });
        }

        //generar el JWT
        const token = await generarJWT(usuario.id);


        //enviar un JSON
        /* res.json({
            usuario,
            token,
            tokenString
        }); */

        // Guardar un token en BD
        /* const tokenbd = new modelToken({
            token,
        });
        await tokenbd.save(); */


        // enviar el token y renderizar productos
        const tokenLocalStorage = token;
        /* res.render('v-product/insertProduct', { tokenLocalStorage }); */


        //res.render('/products', { tokenLocalStorage });
        //res.redirect('/products');

        // Opcion Cookie

        res.cookie('jwt',token)
        res.redirect('/products')

        console.log(tokenLocalStorage)

    } catch (error) {
        console.log(` El error es en el controlador auth ----------------> ${error}`);
        return res.status(500).json({
            msg: 'Escale el Error con el Administrador'
        })
    }

}

module.exports = {
    login
}
