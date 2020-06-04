//importamos las dependencias
const express = require('express');
const hbs = require('hbs');
const mongoose = require('mongoose');
//creamos una constante para el valor del puerto

const PUERTO = process.env.PORT || 3000;

//Emplear rutas
let pintoresRouter = require('./routes/pintor');

//sitio web y HBS
const app = express();
app.set('view engine', 'hbs');
hbs.registerPartials(directory:__dirname + '/viewas/patials');
app.use(express.static(__dirname + '/public'));

//vamos a decirle a express la ruta a emplear
app.use(fn:'/', pintoresRouter);

/*la conexion con mongoDB*/
mongoose.Promise = global.Promise
const cadena = 'mongodb+srv://mich_22:<Michilinda22*>@cluster0-odfup.mongodb.net/curso?retryWrites=true&w=majority'
mongoose.Connect(cadena,{useNewUrlParser: true, useUniedTopology: true});
.then(()=>{})
console.log('conexion establecida');
})
.catch(err=> console.log(err));

/* Arrancar el servidor web*/
app.listen(PUERTO,()=>{
    console.log('Escuchando el puerto...');
    {
        Nombre:"vicente van Gogh",
        Nacionalidad:"Holandes",
        Corriente:"impresionismo",
        Pintura:"Noche estrellada.jpg"

    }

});
