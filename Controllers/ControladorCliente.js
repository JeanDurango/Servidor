//CONTROLADOR:
// 1. Resivir peticiones 
// 2. Ejecutar logica de negocios 
// 3. Llamar la capa de servicios 
// 4. Enviar las respuestas al cliente 

// importo el servico 
import { ServicioHabitacion } from "../services/ServicioHabitacion.js"
export class ControladorHabitacion{
    constructor(){}
    async buscarTodas(req,res)
    {  
        let servicioHabitacion=new ServicioHabitacion()
        try {//todo sale bien 
            res.status(200).json({
               mensaje:"Exito buscando los datos",
               data:await servicioHabitacion.buscarTodas(),
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
        let servicioHabitacion=new ServicioHabitacion() 
        

        let id=req.params.id
        console.log(id)
        try {//todo sale bien 
            res.status(200).json({
               mensaje:"Exito buscando los datos "+id,
               data:await servicioHabitacion.buscarPorId(id),
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
        let servicioHabitacion=new ServicioHabitacion() 
        let datosPeticion=req.body
        try {
            await servicioHabitacion.registrar(datosPeticion)
            res.status(200).json({
                mensaje:"Exito agregando la habitacion",
                data:null,
                estado:true
            })
        } catch (error) {
            res.status(400).json({
                mensaje:"Fallamos agregando habitacion",
                data:[],
                estado:false
             }) 
        }
    }

    async editar(req,res){
        
        let servicioHabitacion=new ServicioHabitacion() 
        let id=req.params.id
        let datosPeticion=req.body
        try {
            await servicioHabitacion.editar(id,datosPeticion)
            res.status(200).json({
                mensaje:"Exito editando habitacion",
                data:null,
                estado:true
            })
        } catch (error) {
            res.status(400).json({
                mensaje:"Fallamos editando habitacion",
                data:[],
                estado:false
             }) 
        }
    }

    async eliminar(req,res){
        let servicioHabitacion=new ServicioHabitacion()
        let id=req.params.id
        try {
            await servicioHabitacion.eliminar(id)
            res.status(200).json({
                mensaje:"Exito eliminando habitacion",
                data:null,
                estado:true
            })
        } catch (error) {
            res.status(400).json({
                mensaje:"Fallamos eliminando habitacion"+error,
                data:[],
                estado:false
             }) 
        }
    }
}