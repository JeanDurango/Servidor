// IMPORTAMOS EL MODELO DE DATOS 
import { modeloCliente } from "../models/modeloCliente.js"

export class ModeloCliente{
    constructor(habitacion){}

    async registrar(cliente){
        let clienteAResgistrar=new modeloCliente(cliente)
        return await clienteAResgistrar.save()
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