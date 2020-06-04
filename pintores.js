const mongoose = require('mongoose');
// creamos schema ( base de datos)

let Shema = mongoose.Schema;

// crear coleccion
Let PintoresSchema = new Schema({
    nombre:{
        type: String,
        required [true, 'requerimos el nombre']
    },
    corriente:{
        type: String,
        required:[true,'requerimos el estilo']
    },
     nacionalidad:{
         type: String 
     },
     píntura:{
         type: String 
     }
});

