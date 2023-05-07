const express = require('express');
const { check } = require('express-validator');
const { validarJWT } = require('../middlewares/validarJWT');

const { existeRefProduct } = require('../helpers/db-validatorSQL');
const { validarCampos } = require('../middlewares/validarCampos');

const controllerProducto = require('../controllers/products_controller');
const router = express.Router();


//router.get('/products', (req, res) => { res.render('v-product/insertProduct') }); 

router.get('/products', [
    validarJWT
], (req, res) => { res.render('v-product/insertProduct') })

router.get('/register_product', (req, res) => { res.render('v-product/insertProduct') });
//router.post('/register_product', controllerProducto.insertProduct);
router.post('/register_product',  [
    check('refProducto').custom(existeRefProduct),
    validarCampos
],  controllerProducto.insertProduct);
router.get('/find_product', controllerProducto.findByRefProducto);




module.exports = router;