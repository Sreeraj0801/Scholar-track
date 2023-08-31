import express from "express";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import * as dotenv from "dotenv";
import { connectToDatabase } from "./connection/mongodb";
connectToDatabase();
dotenv.config();
const app = express();

//----------------------- middleware ------------------------------
app.use(
  cors({
    origin: ["*","http://localhost:4200"],
    methods: ["PUT", "POST", "DELETE", "GET", "PATCH"],
    credentials: true,
  })
);
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static("Public"));
app.use(express.json());

//-------------------------------------------------------------

import adminRouter from './routes/admin'
import qualificationRouter from './routes/qualification';
import domainRouter from './routes/domain';
import userRouter from './routes/user';

app.use('/api/admin',adminRouter);
app.use('/api/qualification',qualificationRouter);
app.use('/api/domain',domainRouter);
app.use('/api',userRouter);



app.listen(process.env.PORT_NUMBER, () => {
  console.log("Server started succesfully at port", process.env.PORT_NUMBER);
});
