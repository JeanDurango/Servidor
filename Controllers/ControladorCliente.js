//CONTROLADOR:
// 1. Resivir peticiones 
// 2. Ejecutar logica de negocios 
// 3. Llamar la capa de servicios 
// 4. Enviar las respuestas al cliente 
// importo el servico 
import { ServicioCliente } from "../services/ServicioCliente.js"
import { ServicioHabitacion } from "../services/ServicioHabitacion.js"
//-----------------------------------------------------------------------------------------------------------
export class ControladorCliente{
    constructor(){}
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
        let servicioHabitacion=new ServicioHabitacion()
        let datosPeticion=req.body//DATOS DEL CLIENTE
        try {
            //consultar cuanto vale por noche una habitacion 
            let habitacionconsultar=await servicioHabitacion.buscarPorId(datosPeticion.idHabitacion)
            console.log(habitacionconsultar)
            let precioNoche = habitacionconsultar.precio
            console.log(precioNoche)
            let fechasalida = datosPeticion.fecha_salida
            console.log(fechasalida)
            let fechaentrada = datosPeticion.fecha_entrada 
            console.log(fechaentrada)   
           // let diastotales = fechaentrada.getTime() - fechasalida.getTime()
            let difference= Math.abs(fechaentrada-fechasalida);
            console.log(difference)
            let diastotales = difference/(1000 * 3600 * 24)
            console.log(diastotales)
            //costo total 
            let costoTotal = (diastotales * precioNoche)
            console.log(costoTotal)
             //insercion de costo
            datosPeticion.costo = costoTotal
         

            await servicioCliente.registrar(datosPeticion)///ingresar cliente
            res.status(200).json({
                mensaje:"Exito agregando el cliente",
                data:null,
                estado:true
            })
        } catch (error) {
            res.status(400).json({
                mensaje:"Fallamos agregando el cliente"+error,
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
                mensaje:"Fallamos editando el cliente"+error,
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