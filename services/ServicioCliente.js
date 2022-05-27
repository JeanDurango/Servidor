// IMPORTAMOS EL MODELO DE DATOS 
import { modeloCliente } from "../models/modeloCliente.js"

export class ModeloCliente{
    constructor(cliente){}

    async registrar(cliente){
        let clienteAResgistrar=new modeloCliente(cliente)
        return await clienteAResgistrar.save()
    }

    async buscarTodas(){
        let clientes=await modeloCliente.find()
        return clientes
    }

    async buscarPorId(id){
        let cliente=await modeloCliente.findById(id)
        return cliente
    }

    async editar(id,datos){
        return await modeloCliente.findByIdAndUpdate(id,datos)
    }

    async eliminar(id){
        return await modeloCliente.findByIdAndDelete(id)
    }
}