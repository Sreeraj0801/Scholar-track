import Users from "../schema/user";
import { User } from "../types/userAuth";

export const registerUser = async (details: User) => {
  try {
    const response = await Users.create(details);
    return {
      email: response.email,
      username: response.email,
      accessToken:""
    };
  } catch (error) {
    throw { error: "User not registered" };
  }
};

export const findUserByEmail = async (email:string) => {
    try {
        return await Users.find({email});
    } catch (error) {
        throw { error: "User not registered" };
    }
}
