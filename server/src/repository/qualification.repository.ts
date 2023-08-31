import mongoose from "mongoose";
import Qualification from "../schema/qualification";

export const findByName = async (qualification: string) => {
  try {
     return await Qualification.find({ qualification });
  } catch (error) {
    console.log("Error while fetching qulaification", error);
    throw { error: " Error on database " };
  }
};

export const createNewQualification = async (qualification:string) =>{
    try {
         return await Qualification.create({qualification});
    } catch (error) {
        throw {error : "Qualification not created,"}
    }
}

export const getAllQualification = async() =>{
  try {
    return await Qualification.find();
  } catch (error) {
    console.log(error);
   throw {error :"Something went wrong"} 
  }
}

export const editQualification = async (id:string,qualification:string) => {
  try {
    const _id = new mongoose.Types.ObjectId(id);
    return await Qualification.findByIdAndUpdate({_id},{$set:{qualification}});
  } catch (error) {
    console.log(error);
    throw {error:"Editing failed"}
  }
}

export const deleteQualification = async (id:string) => {
  try {
    const _id = new mongoose.Types.ObjectId(id);
    const response =  await Qualification.findByIdAndDelete(_id);
    if(response) return response;
    else throw {error:"Qualification not present"}    
  } catch (error:any) {
    if (error.error === "Qualification not present") {
      throw error;}
    throw { error: "Deleting failed" };
  }
}