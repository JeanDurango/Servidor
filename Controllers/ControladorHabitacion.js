//CONTROLADOR:
// 1. Resivir peticiones 
// 2. Ejecutar logica de negocios 
// 3. Llamar la capa de servicios 
// 4. Enviar las respuestas al cliente  
export class ControladorHabitacion{
    constructor(){}
    buscarTodas(req,res)
    {       
        let datos = [{nombre:"Juan",edad:32},{nombre:"sara",edad:31}] //borrar despues
        try {//todo sale bien 
            res.status(200).json({
               mensaje:"Exito buscando los datos",
               data:datos,
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

    buscarPorId(req,res){
        let datos = [{nombre:"Jean",edad:32}] //borrar despues
        let id=req.params.id
        console.log(id)
        try {//todo sale bien 
            res.status(200).json({
               mensaje:"Exito buscando los datos "+id,
               data:datos,
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

    registrar(req,res){
        let datosPeticion=req.body
        try {
            res.status(200).json({
                mensaje:"Exito agregando la habitacion",
                data:datosPeticion,
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

    editar(req,res){
        let id=req.params.id
        let datosPeticion=req.body
        try {
            res.status(200).json({
                mensaje:"Exito editando habitacion",
                data:datosPeticion,
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

    eliminar(req,res){
        let id=req.params.id
        try {
            res.status(200).json({
                mensaje:"Exito eliminando habitacion",
                data:[],
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