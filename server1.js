require('dotenv').config();

//Importaciones de Otros archivos
//


const port = process.env.PORT;


//Importaciones de paquetes instalados 


const express = require('express'); 
const morgan = require('morgan');
const path = require('path');
const {engine} = require('express-handlebars');
const methodOverride = require('method-override');
const cors = require('cors')

//Variables 
const app = express();




// Middlewares para que pueda recibir JSON
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(morgan('dev'));
app.use(methodOverride('__method'))


// configuracion vistass
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', engine({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'),'layouts'),
    partialsDir: path.join(app.get('views'),'partials'),
    extname: '.hbs'
}));


//Middlewares

/* app.set('port', ConfigPort.port); */
app.set('view engine','.hbs');
app.use(morgan('start'));


//Directorio publico
app.use(express.static('public'));
app.use(cors());


app.listen(port,()=>{
    console.log(`el servidor 1 esta escuchando por el puerto ${port}`)
});



// Rutas 
app.use(require('./routes/index'));

module.exports = app; 




