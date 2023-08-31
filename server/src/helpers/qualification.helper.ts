import { ObjectId } from "mongoose";
import { createNewQualification, deleteQualification, editQualification, findByName, getAllQualification } from "../repository/qualification.repository"
import Qualification from "../schema/qualification"

export const createQualificationHelper = async (data:{qualification:string})=>{
    if(data){
        const response = await findByName(data.qualification);
        if(!response.length){
            await createNewQualification(data.qualification);
            return {message:"New Qualification created"};
        }else throw {error:"Qaulification already exist"}
    }else{
        throw {error:"Empty credential"}
    }
}

export const getAllQualificationsHelper = async () => {
    try {
        const response = await getAllQualification();
        if(response) return response;
        else throw {message:"No qualifications exist"}
    } catch (error) {
        throw error
    }
}

export const editQualificationHelper = async (id:string,qualification:string) => {
    try {
        await editQualification(id,qualification); 
        return {message:"Editted succesfully"}
    } catch (error) {
        throw error
    }
}

export const deleteQualificationHelper = async (id:string) =>{
    try {
        await deleteQualification(id); 
        return {message:"Deleted Succesfully"}
    } catch (error) {
        throw error
    }
}