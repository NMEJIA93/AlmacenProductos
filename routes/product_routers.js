const express = require('express');
const { check } = require('express-validator');
const {validarJWT}= require('../middlewares/validarJWT')

const controllerProducto = require('../controllers/products_controller');
const router = express.Router();


//router.get('/products', (req, res) => { res.render('v-product/insertProduct') }); 

router.get('/products' ,[
    validarJWT
] , (req, res) => { res.render('v-product/insertProduct') })

router.get('/register_product', (req, res) => { res.render('v-product/insertProduct') });
router.post('/register_product', controllerProducto.insertProduct);


module.exports = router;