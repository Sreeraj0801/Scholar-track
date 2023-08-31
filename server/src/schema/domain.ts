import mongoose from "mongoose";

const domainSchema = new mongoose.Schema({
    domain:{
        type:String,
        required:true
    }
});

const Domain = mongoose.model("Domains",domainSchema);
export default Domain;