import mongoose from "mongoose";
import { MyConnectOptions } from "../types/mongodb.connection";

const dbOptions:MyConnectOptions = {
    useNewUrlParser:true,
    useUnifiedTopology:true
}


export const connectToDatabase = () => {
    mongoose.connect('mongodb+srv://sreerajr0801:sreeraj0801@cluster0.uklhwci.mongodb.net/',dbOptions).then(()=>{
        console.log('Succesfully connected to mongoDB databse');
    }).catch(err => console.error({dbError:err}))
}