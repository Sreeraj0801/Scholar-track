import express from "express";
import { adminAuth } from "../controller/adminAuth";
import { createQualification, deleteQualification, editQualification, getAllQualifications } from "../controller/qualification";
const router = express.Router();


//qualification
router.route('/')
.post(createQualification)
.get(getAllQualifications)

router.route('/:id')
.patch(editQualification)
.delete(deleteQualification)

export default router;
