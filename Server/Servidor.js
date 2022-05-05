//IMPORTO EL FRAMEWORD EXPRESS
//const express = require('express')// VERSION VIEJA
import express from 'express'

// importos las rutas de la API 
import{rutas} from '../routes/rutas.js'

export class Servidor
{
    constructor()
    {
        this.app = express() // atributo app guarda a exprees
        this.llamarAuxiliare()//activo midlewareso ayudas
        this.atenderPeticiones()
    }
    despertarServidor()
    {
        this.app.listen(process.env.PORT,function()
        {
         console.log(`SERVIDOR ENCENDIDO EN ${process.env.PORT}`)
        })
    }
    atenderPeticiones()
    {
       //llamando al archivo de rutas
       this.app.use('/',rutas)
          
    }
    llamarAuxiliare()
    {
        this.app.use(express.json())//es el ayudante para recibir dato por el dato por el body de la peticion 
    }

}