import {
  createDomain,
  findDomain,
  fetchAllDomains,
  editDomainRepo,
  deleteDomainRepo,
} from "../repository/domain.repository";

export const createNewDomainHelper = async (domain: string) => {
  try {
    const domains = await findDomain(domain);
    if (!domains.length) {
      return await createDomain(domain);
    } else throw { error: "Domain already exist" };
  } catch (error) {
    throw error;
  }
};

export const getAllDomainsHelper = async () => {
  try {
    return await fetchAllDomains();
  } catch (error) {
    throw error;
  }
};

export const editDomainHelper = async (id: string, domain: string) => {
  try {
    return await editDomainRepo(id, domain);
  } catch (error) {
    throw error;
  }
};

export const deleteDomainHelper = async (id: string) => {
  try {
    return await deleteDomainRepo(id);
  } catch (error) {
    throw error;
  }
};
