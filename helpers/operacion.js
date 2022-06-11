import { ServicioHabitacion } from "../services/ServicioHabitacion.js"
import { ServicioCliente } from "../services/ServicioCliente.js"

export class Operacion{
async diferenciafecha(req,res){  
    let servicioHabitacion=new ServicioHabitacion()
    let servicioCliente=new ServicioCliente()
    let datosPeticion=req.body     //DATOS DEL CLIENTE
    //if(!(fechasalida instanceof Date) || !(fechaentrada instanceof Date))
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
       // calculamos la difenrencia de fechas
       let milsegundosDias = 24 * 60 * 60 * 1000;
       let milisegundosTranscurridos = Math.abs(fechaentrada.getTime() - fechasalida.getTime());
       let diastotales = Math.round(milisegundosTranscurridos/milsegundosDias); 
       console.log(diastotales)        
        //costo total 
        //let costoTotal = (diastotales * precioNoche)
         //insercion de costo
       //datosPeticion.costo = costoTotal
       // console.log(costoTotal)              
    }
    catch (error) {
        res.status(400).json({
            mensaje:"Fallamos calculando la fecha"+error,
            data:[],
            estado:false
         })  
}
}
}

