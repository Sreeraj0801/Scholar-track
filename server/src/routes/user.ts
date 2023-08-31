import express from "express";
import { userLogin, userRegistration } from "../controller/uesrAuth";
const router = express.Router();


//userRegistration
router.post('/registration',userRegistration);

//userLogin
router.post('/login',userLogin)


export default router;
