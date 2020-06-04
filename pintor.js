const express =require('express');
//vamos a rutear a los pintores
let pintor = require('../controllers/pintorescontrolador.js');

//creamos rutas
let router = express.Router();

router.get('/', pintor.list());

module.exports = router;
