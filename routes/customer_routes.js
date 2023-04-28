
const express = require('express');
const routerCustomer = require('../controllers/customer_controller');
const router = express.Router();





// Registro
router.get('/singin', (req, res) => { res.render('v-customer/registerCustomer') });
/* router.get('/cliente/singin', (req, res) => { res.render('v-customer/registerCustomer') }); */

//Loguin
router.get('/loguin', (req, res) => { res.render('v-loguin/loguinCustomer') });

router.post('/pruebaInsert', routerCustomer.pruebaInsert);

module.exports = router;