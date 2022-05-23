//importar mongoose
import mongoose from 'mongoose';

export async function conectarConBD(){
    try {
        await mongoose.connect(process.env.DATASBASE);
        console.log("Exito conectando BD")
    } catch (error) {
        console.log("UPSS..." +error)
    }
}