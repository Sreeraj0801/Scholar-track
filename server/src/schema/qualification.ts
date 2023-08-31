import mongoose from "mongoose";

const qualificationSchema = new mongoose.Schema({
    qualification:{
        type:String,
        required:true
    }
});

const Qualification = mongoose.model("Qualification",qualificationSchema);
export default Qualification;