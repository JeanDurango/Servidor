import express from "express"
// importo el controlador de habitaciones 
import { ControladorHabitacion } from "../Controllers/ControladorHabitacion.js"
// creo un objeto de la clase ControladorHabitacion 
let controladorHabitacion =new ControladorHabitacion
// UTIIZO EL METODO ROUTE DE EXPRESS 
export let rutas = express.Router()
 //SERVICIOS DE MI API

 //rutas habitacion
 rutas.get('/api/version1/habitacion/', controladorHabitacion.buscarTodas )
 rutas.get('/api/version1/habitacion/:id', controladorHabitacion.buscarPorId)
 rutas.post('/api/version1/habitacion', controladorHabitacion.registrar)
 rutas.put('/api/version1/habitacion/:id', controladorHabitacion.editar)
 rutas.delete('/api/version1/habitacion/:id', controladorHabitacion.eliminar)

 ///rutas clientes
 rutas.get('/api/version1/cliente/', controladorHabitacion.buscarTodas )
 rutas.get('/api/version1/cliente/:id', controladorHabitacion.buscarPorId)
 rutas.post('/api/version1/cliente', controladorHabitacion.registrar)
 rutas.put('/api/version1/cliente/:id', controladorHabitacion.editar)
rutas.delete('/api/version1/cliente/:id', controladorHabitacion.eliminar)

