//IMPORTO EL FRAMEWORD EXPRESS
//const express = require('express')// VERSION VIEJA

import express from 'express'
export class Servidor
{
    constructor()
    {
        this.app = express() // atributo app guarda a exprees
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
        //SERVICIOS DE MI API
        this.app.get('/api/version1/sabado', function (req, res) 
        {
         res.send('Hello Jean Durango')
        })

        this.app.get('/api/version1/sabado/:id', function (req, res) 
        {
         res.send('Hello Jean Durango')
        })

        this.app.post('/api/version1/sabado', function (req, res) 
        {
         res.send('Hello Goez')
        })

        this.app.put('/api/version1/sabado', function (req, res) 
        {
         res.send('Hello Carlos')
        })

        this.app.delete('/api/version1/sabado', function (req, res) 
        {
         res.send('Hello Jhan carlos durango goez')
        })
          
    }
}