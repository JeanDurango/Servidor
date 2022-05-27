//CONTROLADOR:
// 1. Resivir peticiones 
// 2. Ejecutar logica de negocios 
// 3. Llamar la capa de servicios 
// 4. Enviar las respuestas al cliente 

// importo el servico 
import { ServicioCliente } from "../services/ServicioCliente.js"
export class ControladorHabitacion{
    constructor(){}
    async buscarTodas(req,res)
    {  
        let servicioCliente=new ServicioCliente()
        try {//todo sale bien 
            res.status(200).json({
               mensaje:"Exito buscando los datos",
               data:await servicioCliente.buscarTodas(),
               estado:true
            })          
        } catch (error) {
            res.status(400).json({
                mensaje:"Error buscando los datos" +error,
                data:[],
                estado:false
             }) 
        }
    }

    async buscarPorId(req,res)
    {
        let servicioCliente=new ServicioCliente()
        let id=req.params.id
        console.log(id)
        try {//todo sale bien 
            res.status(200).json({
               mensaje:"Exito buscando los datos "+id,
               data:await servicioCliente.buscarPorId(id),
               estado:true
            })          
        } catch (error) {
            res.status(400).json({
                mensaje:"Error buscando los datos" +error,
                data:[],
                estado:false
             }) 
        }
    }

    async registrar(req,res){
        let servicioCliente=new ServicioCliente()
        let datosPeticion=req.body
        try {
            await servicioCliente.registrar(datosPeticion)
            res.status(200).json({
                mensaje:"Exito agregando el cliente",
                data:null,
                estado:true
            })
        } catch (error) {
            res.status(400).json({
                mensaje:"Fallamos agregando el cliente",
                data:[],
                estado:false
             }) 
        }
    }

    async editar(req,res){
        
        let servicioCliente=new ServicioCliente()
        let id=req.params.id
        let datosPeticion=req.body
        try {
            await servicioCliente.editar(id,datosPeticion)
            res.status(200).json({
                mensaje:"Exito editando el cliente",
                data:null,
                estado:true
            })
        } catch (error) {
            res.status(400).json({
                mensaje:"Fallamos editando el cliente",
                data:[],
                estado:false
             }) 
        }
    }

    async eliminar(req,res){
        let servicioCliente=new ServicioCliente()
        let id=req.params.id
        try {
            await servicioCliente.eliminar(id)
            res.status(200).json({
                mensaje:"Exito eliminando el cliente",
                data:null,
                estado:true
            })
        } catch (error) {
            res.status(400).json({
                mensaje:"Fallamos eliminando el cliente"+error,
                data:[],
                estado:false
             }) 
        }
    }
}