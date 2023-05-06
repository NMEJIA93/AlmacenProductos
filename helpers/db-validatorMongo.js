const modelCustomer = require('../models/customer');



const emailRegistrado = async (email = '') => {
    const emailRegistrado = await modelCustomer.findOne({ email });

    if (emailRegistrado ) {
        //return res.status(400).json({ msg: 'Cliente Ya Registrado' });
        throw new Error(`El correo ${email} ya esta registrado`);
    }
}

const nIdentificacionRegistrado = async ( nIdentificacion = '') => {
    const clienteRegistrado = await modelCustomer.findOne({ nIdentificacion }) // esta linea busca en la base de datos si existe este correo

    if ( clienteRegistrado) {
        //return res.status(400).json({ msg: 'Cliente Ya Registrado' });
        throw new Error(`El numero de Identificacion: ${nIdentificacion} ya esta registrado`);
    }
}

module.exports = {
    emailRegistrado,
    nIdentificacionRegistrado
}