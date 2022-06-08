import express from "express"
// importo el controlador de habitaciones 
import { ControladorHabitacion } from "../Controllers/ControladorHabitacion.js"
// importo el controlador de cliente
import {ControladorCliente} from "../Controllers/ControladorCliente.js"
// creo un objeto de la clase controladores importados
let controladorCliente =new ControladorCliente()
let controladorHabitacion =new ControladorHabitacion()
// UTIIZO EL METODO ROUTE DE EXPRESS 
export let rutas = express.Router()
 //SERVICIOS DE MI API

 //rutas habitacion
 rutas.get('/api/version1/habitacion', controladorHabitacion.buscarTodas )
 rutas.get('/api/version1/habitacion/:id', controladorHabitacion.buscarPorId)
 rutas.post('/api/version1/habitacion', controladorHabitacion.registrar)
 rutas.put('/api/version1/habitacion/:id', controladorHabitacion.editar)
 rutas.delete('/api/version1/habitacion/:id', controladorHabitacion.eliminar)

 ///rutas clientes
 rutas.get('/api/version1/cliente/:id', controladorCliente.buscarPorId)
 rutas.post('/api/version1/cliente', controladorCliente.registrar)
 rutas.put('/api/version1/cliente/:id', controladorCliente.editar)
 rutas.delete('/api/version1/cliente/:id', controladorCliente.eliminar)

