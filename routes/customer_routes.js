
const express = require('express');
const { check } = require('express-validator');


const routerCustomer = require('../controllers/customer_controller');
const { validarCampos } = require('../middlewares/validarCampos');
const { emailRegistrado,
    nIdentificacionRegistrado } = require('../helpers/db-validatorMongo');




const router = express.Router();





// Registro
router.get('/register_customer', (req, res) => { res.render('v-customer/registerCustomer') });
router.post('/register_customer', [
    check('pNombre', 'El Primer nombre es Oogligatorio').not().isEmpty(),
    /*     check('nIdentificacion','El numero de Identificacion no valido').not().isNumeric().notEmpty(), */
    check('email', 'Email no Valido').isEmail(),
    check('email').custom(emailRegistrado),
    check('nIdentificacion').custom(nIdentificacionRegistrado),
    validarCampos],
    routerCustomer.customerPost);
/* router.get('/cliente/singin', (req, res) => { res.render('v-customer/registerCustomer') }); */




//Loguin
/* router.get('/login', (req, res) => { res.render('login') }); */

router.get('/login', (req, res) => {

    res.render('v-login/login');
})





module.exports = router;