const { Schema,model } = require('mongoose');

const tokenSchema = Schema({
    token: {
        type: String,
        require: [true, 'El token es Obligatorio']
    }

});
/* 
customerSchema.methods.toJSON = function () {
    const {__v, password, _id, ...customer}= this.toObject();
    customer.uid = _id
    return customer;
}; */



module.exports = model('Token',tokenSchema )