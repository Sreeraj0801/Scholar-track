import { Request, Response } from "express";
import { doLogin } from "../helpers/adminAuth.helper";
import { generateAccessToken } from "../jwt/auth.jwt";
import { adminAuthResponse } from "../types/adminAuth";

export const adminAuth = async (req:Request,res:Response)=>{
    try {
        const response:adminAuthResponse = await doLogin(req.body);
        const accessToken = await generateAccessToken(response.email);
        response.accessToken = accessToken;
        res.cookie("accessToken", accessToken);
        res.status(200).json(response);
    } catch (error) {
       console.log(error);
       res.status(401).json(error);
    }
}

