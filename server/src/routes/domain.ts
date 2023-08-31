import express from "express";
import { createNewDomain, deleteDomain, editDomain } from "../controller/domain";
import { getAllDomains } from "../controller/domain";
const router = express.Router();

//qualification
router.route("/")
.post(createNewDomain)
.get(getAllDomains);

router.route("/:id")
.patch(editDomain)
.delete(deleteDomain);

export default router;
