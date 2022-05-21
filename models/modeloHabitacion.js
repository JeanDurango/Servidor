import mongoose from "mongoose";

const Schema = mongoose.Schema;// esquema de datos (que  datos tiene mi modelo )

// creo mi propio esquema de datos
const Habitacion=new Schema({
    nombre : {
        type:String,
        req:true
    },
    precio:{
        type:Number,
        req:true
    },
    capacidad:{
        type:Number,
        req:true
    },
    descripcion:{
        type:String,
        req:true
    },
    imagen:{
        type:String,
        req:true
    }
})

//se envia el modelo de datos

export const modeloHabitacion=mongoose.model('habitaciones', Habitacion);