const { response } = require('express');
const jwt = require('jsonwebtoken');
const modelCustomer = require('../models/customer');
const cookieParser = require('cookie-parser')

/* const modelToken = require('../models/token');
const {login}= require('../controllers/auth'); */

const validarJWT = async (req, res = response, next) => {

    //const token = req.header('x-token')
    //const token = await modelToken.findOne(); 
    const token = req.cookies.jwt;
    

    if (!token) {
        console.log(token)
        return res.status(401).json({
            msg: ' no hay Token en la peticion -- archivo validacion Token',
            token

        })

    }

    try {

        const { uid } = jwt.verify(token, process.env.SECRETORPRIVATEKEY)
        const customer = await modelCustomer.findById(uid);

        //usuario no Existe

        if (!customer) {
            return res.status(401).json({
                msg: 'Token no valido - Usuario no Existe en BD'
            })
        }


        // verificar si el uid tiene estado true
        if (!customer.estado) {
            return res.status(401).json({
                msg: 'Token no valido - Usuario con estado False'
            })
        }

        req.customer = customer;
          console.log(token) 

        next();



    } catch (error) {
        console.log(error)
        res.status(401).json({
            msg: 'token no valido'
        })
    }

};

module.exports = {
    validarJWT
}