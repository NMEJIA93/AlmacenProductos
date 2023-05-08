const express = require('express');
const { check } = require('express-validator');
const { validarJWT } = require('../middlewares/validarJWT');

const { existeRefProduct, noExisteRefProduct } = require('../helpers/db-validatorSQL');
const { validarCampos } = require('../middlewares/validarCampos');

const controllerProducto = require('../controllers/products_controller');
const router = express.Router();


//router.get('/products', (req, res) => { res.render('v-product/insertProduct') }); 

router.get('/products', [validarJWT], (req, res) => { res.render('v-product/insertProduct') })

//router.get('/register_product', (req, res) => { res.render('v-product/insertProduct') });
//router.post('/register_product', controllerProducto.insertProduct);
router.post('/register_product', [
    validarJWT,
    check('refProducto').custom(existeRefProduct),
    validarCampos
], controllerProducto.insertProduct);


// Rutas para Modificar los productos

router.get('/update_product', [validarJWT], (req, res) => { res.render('v-product/updateProduct') });
router.post('/find_product', [validarJWT,
    check('refProducto', 'La Referencia es Obligatoria').not().isEmpty(),
    check('refProducto').custom(noExisteRefProduct),
    validarCampos
], controllerProducto.findByRefProducto);

router.post('/update_product', [validarJWT,
    check('nomProducto', 'El nombre del producto es Obligatorio').not().isEmpty(),
    check('categoriaProducto', 'La Categoria es Obligatoria').not().isEmpty(),
    check('valorUnitario', 'El valor es Obligatorio').not().isEmpty()
    , validarCampos], controllerProducto.updateProduct);

//router.put('/update_product')






module.exports = router;