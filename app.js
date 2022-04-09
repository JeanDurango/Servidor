//IMPORTO LAS VARIABLES DE ENTORNO 
//require('dotenv').config() FORMA VIEJA DE IMPORTAR
import 'dotenv/config'

//Importo la clase servidor 
import {Servidor} from './Server/Servidor.js'

// CREAR UN ODJETO DE LA CLASE SERVIDOR 
let servidor=new Servidor()

//DESPERTAR EL SERVIDOR
servidor.despertarServidor()
