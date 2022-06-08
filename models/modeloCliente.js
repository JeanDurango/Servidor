import mongoose from "mongoose";

const Schema = mongoose.Schema;// esquema de datos (que  datos tiene mi modelo )

// creo mi propio esquema de datos
const Cliente=new Schema({
    idHabitacion:{
        type:String,
        req:true
    },
    nombre : {
        type:String,
        req:true
    },
    apellido:{
        type:String,
        req:true
    },
    telefono:{
        type:String,
        req:true
    },
    fecha_entrada:{
        type:Date,
        req:true
    },
    fecha_salida:{
        type:Date,
        req:true
    },
    numero_personas:{
        type:Number,
        req:true
    },
    costo:{
        type:Number,
        required:false
    }

})

//se envia el modelo de datos

export const modeloCliente=mongoose.model('clientes', Cliente);