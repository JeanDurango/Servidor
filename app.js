//IMPORTO LAS VARIABLES DE ENTORNO 
//require('dotenv').config() FORMA VIEJA DE IMPORTAR
import 'dotenv/config'

//Importo la clase servidor 
import {Servidor} from './Server/Servidor.js'
//import {Operacion} from './helpers/operacion.js'
// CREAR UN ODJETO DE LA CLASE SERVIDOR 
//let operacion=new Operacion()
let servidor=new Servidor()

//DESPERTAR EL SERVIDOR
servidor.despertarServidor()
//console.log(operacion.diferenciafecha())
