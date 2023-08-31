import { Request, Response } from "express";
import { generateAccessToken } from "../jwt/auth.jwt";
import { adminAuthResponse } from "../types/adminAuth";
import { userRegistrationHelper } from "../helpers/userAuth.helper";

export const userRegistration = async (req:Request,res:Response)=>{
    try {
        const response = await userRegistrationHelper(req.body);
        const accessToken = await generateAccessToken(response.email);
        response.accessToken = accessToken;
        res.cookie("accessToken", accessToken);
        res.status(200).json(response);
    } catch (error) {
       res.status(401).json(error);
    }
}

export const userLogin = async () => {
    
}