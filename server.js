const express = require('express');
const cors = require('cors')
const morgan = require('morgan');
const path = require('path');
const { engine } = require('express-handlebars');
const methodOverride = require('method-override');
const { dbConnection } = require('./database/connectionDBmongo');
const { getConnection } = require('./database/connectionBD');
const hbs = require('hbs');




class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        /*  this.clientesPath = '/cliente'; */

        //Configurar Vistas
        this.views();


        // Middlewares
        this.middlewares();


        // Rutas de la aplicacion 
        this.routes();


        /*   this.PruebaConexionSQL()*/

        // Base de Datos
        this.conectarBDmongo();
        this.conectarBDsql();
    }


    async conectarBDmongo() {
        await dbConnection();
    }

    async conectarBDsql() {
        await getConnection();
    }

    // Middlewares
    middlewares() {
        //Directorio publico
        this.app.use(express.static('public'));
        /* this.app.use("/resources", express.static(__dirname + "/public")); */
        this.app.use("/resources", express.static("public"));
        this.app.use(cors());




        // Parseo y Lectura del Body
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
        this.app.use(morgan('dev'));
        this.app.use(methodOverride('__method'))

        //
        this.app.use(morgan('start'));

    }

    routes() {
        /* this.app.use(this.usuariosPath, require('../routes/usuarios')); */
        this.app.use(require('./routes/index'));
        this.app.use(/* this.clientesPath, */require('./routes/customer_routes'));



    }

    views() {

        /* -------------------------------------------------------------------------------------------------------------------------------------- */
        /* de esta forma se genera en la carpeta layouts un archivo main que funciona como la plantilla principal y en casa vista o ventana  solo se agrega el contenido de esa vista   */

        /* this.app.set('views', path.join(__dirname, 'views')); */
        /* this.app.engine('.hbs', engine({
            defaultLayout: 'main',
            layoutsDir: path.join(this.app.get('views'), 'layouts'),
            partialsDir: path.join(this.app.get('views'), 'partials'),
            extname: '.hbs'
        })); */



        /* -------------------------------------------------------------------------------------------------------------------------------------- */
        /* Usando de la forma del Curso
        de esta forma en cada plantilla HBS se debe agregar todo el formato HTML y se adiciona el Header o el Footer si se requiere  */

        this.app.set('view engine', 'hbs');
        hbs.registerPartials(__dirname + '/views/partials', function (err) { });

        this.app.set('view engine', '.hbs')
    }


    listen() {
        this.app.listen(this.port, () => {
            console.log('aplicacion iniciada desde el archivo server')
            console.log(`el servidor esta escuchando por el puerto ${this.port}`)

        })
    }

    /*  PruebaConexionSQL(){
         this.app.use(require('./database/connectionBD'))
     }
  */
}

module.exports = Server;