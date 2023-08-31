import { Request, Response, response } from "express";
import { createNewDomainHelper, deleteDomainHelper, editDomainHelper, getAllDomainsHelper } from "../helpers/domain.helper";

export const createNewDomain = async (req: Request, res: Response) => {
  try {
    const response = await createNewDomainHelper(req.body.domain);
    res.status(201).json(response);
  } catch (error) {
    res.status(402).json(error);
  }
};

export const getAllDomains = async(req:Request,res:Response) => {
    try {
        const response = await getAllDomainsHelper();
        res.status(201).json(response);
    } catch (error) {
      res.status(402).json(error);
    }
}

export const editDomain = async (req:Request,res:Response) => {
    try {
        const response = await editDomainHelper(req.params.id,req.body.domain);
        res.status(201).json(response);
    } catch (error) {
      res.status(402).json(error);
    }
}

export const deleteDomain =  async (req:Request,res:Response) => {
  try {
      const response = await deleteDomainHelper(req.params.id);
      res.status(201).json(response);
  } catch (error) {
    res.status(402).json(error);
  }
}