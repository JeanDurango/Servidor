import express from "express"
// importo el controlador de habitaciones 
import { ControladorHabitacion } from "../Controllers/ControladorHabitacion.js"
// creo un objeto de la clase ControladorHabitacion 
let controladorHabitacion =new ControladorHabitacion
// UTIIZO EL METODO ROUTE DE EXPRESS 
export let rutas = express.Router()
 //SERVICIOS DE MI API
 rutas.get('/api/version1/sabado/', controladorHabitacion.buscarTodas )

 rutas.get('/api/version1/sabado/:id', controladorHabitacion.buscarPorId)

 rutas.post('/api/version1/sabado', controladorHabitacion.registrar)

 rutas.put('/api/version1/sabado/:id', controladorHabitacion.editar)

rutas.delete('/api/version1/sabado/:id', controladorHabitacion.eliminar)
