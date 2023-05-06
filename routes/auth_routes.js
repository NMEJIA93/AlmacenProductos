const { Router } = require('express');
const { check } = require('express-validator');
const { login } = require('../controllers/auth');

const { validarCampos } = require('../middlewares/validarCampos');

const router = Router();

router.post('/login',[
    check('email', 'El correo es Obligatorio').isEmail(),
    check('password', 'La Contraseña es Obligatoria').not().isEmpty(),
    validarCampos], login);

module.exports = router;