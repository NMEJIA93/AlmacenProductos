const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Base de datos Mongo Online');
    } catch (error) {
        console.log(error);
        throw new Error('Error en la conexion de la Base de datos');
    }
};

module.exports = {
    dbConnection
}