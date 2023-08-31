import express from "express";
import { adminAuth } from "../controller/adminAuth";
import { createQualification, getAllQualifications } from "../controller/qualification";
const router = express.Router();


//adminLogin
router.post('/login',adminAuth);

//qualification
router.route('/qualification')
.post(createQualification)
.get(getAllQualifications)

export default router;
