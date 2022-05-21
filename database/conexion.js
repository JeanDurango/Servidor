//importar mongoose
import mongoose from 'mongoose';

export async function conectarConBD(){
    try {
        await mongoose.connect(process.env.DATABASE);
    } catch (error) {
        console.log("UPSS..." +error)
    }
}