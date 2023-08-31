import mongoose from "mongoose";
import Domain from "../schema/domain";

export const createDomain = async (domain: string) => {
  try {
    const response = await Domain.create({ domain });
    const clearResponse = response.toJSON();
    return { ...clearResponse, message: "Domain created succesfully" };
  } catch (error) {
    throw { error: "Domain not created" };
  }
};

export const findDomain = async (domain: string) => {
  try {
    return await Domain.find({ domain });
  } catch (error) {
    throw { error: "Search incomplete" };
  }
};

export const fetchAllDomains = async () => {
  try {
    return await Domain.find();
  } catch (error) {
    throw { error: "Domain search error" };
  }
};

export const editDomainRepo = async (id: string, domain: string) => {
  try {
    const _id = new mongoose.Types.ObjectId(id);
    await Domain.findByIdAndUpdate(_id, { $set: { domain } });
    return { message: "Domain editted succesfully" };
  } catch (error) {
    throw { error: "Domain didnot updated" };
  }
};


export const deleteDomainRepo = async (id:string) => {
  try {
    const _id = new mongoose.Types.ObjectId(id);
    await Domain.deleteOne(_id)
    return { message: "Domain deleted succesfully" };
  } catch (error) {
    throw { error: "Domain didnot deleted" };
  }
}