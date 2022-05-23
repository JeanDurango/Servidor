// IMPORTAMOS EL MODELO DE DATOS 
import {modeloHabitacion} from '../models/modeloHabitacion.js'

export class ServicioHabitacion{
    constructor(habitacion){}

    async registrar(habitacion){
        let habitacionAResgistrar=new modeloHabitacion(habitacion)
        return await habitacionAResgistrar.save()
    }

    async buscarTodas(){
        let habitaciones=await modeloHabitacion.find()
        return habitaciones
    }

    async buscarPorId(id){
        let habitacion=await modeloHabitacion.findById(id)
        return habitacion
    }

    async editar(id,datos){
        return await modeloHabitacion.findByIdAndUpdate(id,datos)
    }

    async eliminar(id){
        return await modeloHabitacion.findByIdAndDelete(id)
    }
}