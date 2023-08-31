import {Request,Response} from 'express';
import { createQualificationHelper, deleteQualificationHelper, editQualificationHelper, getAllQualificationsHelper } from '../helpers/qualification.helper';

export const createQualification = async (req:Request,res:Response)=>{
    try {
        const response = await createQualificationHelper(req.body);
        res.status(201).json(response);
    } catch (error) {
        res.status(402).json(error);
    }
}

export const getAllQualifications = async (req:Request,res:Response)=>{
    try {
        const response = await getAllQualificationsHelper();
        res.status(200).json(response);
    } catch (error) {
        res.status(402).json(error);
    }
}

export const editQualification = async (req:Request,res:Response) => {
    try {
        const response = await editQualificationHelper(req.params.id,req.body.qualification);
        res.status(201).json(response);
    } catch (error) {
        res.status(402).json(error)
    }
} 

export const deleteQualification = async (req:Request,res:Response)  => {
    try {
        const response = await deleteQualificationHelper(req.params.id);
        res.status(201).json(response);
    } catch (error) {
        res.status(402).json(error)
    }
}