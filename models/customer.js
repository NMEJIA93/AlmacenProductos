const { Schema,model } = require('mongoose');

const customerSchema = Schema({
    pNombre: {
        type: String,
        require: [true, 'El primer nombre es Obligatorio']
    },
    sNombre: {
        type: String
    },
    pApellido: {
        type: String,
        require: [true, 'El primer Apellido es Obligatorio']
    },
    sApellido: {
        type: String
    },
    fechaNacimiento: {
        type: String,
        require: [true, 'La fecha de nacimiento es Obligatoria']
    },
    tIdentificacion: {
        type: String,
        require: [true, 'el tipo de identificacion ']
    },
    nIdentificacion: {
        type: String,
        require: [true, 'El correo es Obligatorio'],
        unique: true
    },
    email: {
        type: String,
        require: [true, 'El correo es Obligatorio'],
        unique: true
    },
    indiccativoPais: {
        type: String,
        require: [true, 'El correo es Obligatorio'],
    },
    tContacto: {
        type: String,
        require: [true, 'El correo es Obligatorio'],
        unique: true
    },
    password: {
        type: String,
        require: [true, 'la contraseña es Obligatorio'],

    },
    estado:{
        type:Boolean,
        default: true
    },

});

customerSchema.methods.toJSON = function () {
    const {__v, password, _id, ...customer}= this.toObject();
    customer.uid = _id
    return customer;
};



module.exports = model('Customer',customerSchema )