/* const express = require('express');
const routerEmpleado = require('../controllers/customer_controller');

const router = express.Router();


router.get('/singin', (req, res) => {res.render('v-customer/registerCustomer')});
/* router.post('/empleados', routerEmpleado.createNewEmpleado); 
 */


const express = require('express');
const router = express.Router();

// Registro
router.get('/singin',(req,res)=>{res.render('v-customer/registerCustomer')});



//Loguin
router.get('/loguin',(req,res)=>{res.render('v-loguin/loguinCustomer')});



module.exports = router;