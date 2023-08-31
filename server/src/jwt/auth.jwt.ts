import {sign,verify} from 'jsonwebtoken';

export const generateAccessToken = async (userId:string) => {
    try {
        return await sign({userId},process.env.JWT_ACCESS_TOKEN_SECRET as string ,{expiresIn:'15m'}) 
    } catch (error) {
        throw ('Error on generating access token');       
    }
}

export const generateRefreshToken = async (userId:string) => {
    try {
        return await sign({userId},process.env.JWT_ACCESS_TOKEN_SECRET as string ,{expiresIn:'2d'}); 
    } catch (error) {
        throw ('Error on generating refresh token');       
    }
}