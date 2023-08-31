import { hashPassword } from "../config/bcrypt"
import { findUserByEmail, registerUser } from "../repository/user.repository";
import { User } from "../types/userAuth";

export const userRegistrationHelper = async (details:User)=>{
    try {
        if(details.email && details.password && details.username){
            const users = await findUserByEmail(details.email)
            if(users.length){
                throw {message:"User already exist"}
            }
            details.password = await hashPassword(details.password);
            return registerUser(details);
        }else throw {error:"Invalid credentials"}
    } catch (error) {
        throw error;
    }
}