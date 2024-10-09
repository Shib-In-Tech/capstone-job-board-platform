import  express from "express";
const router = express.Router();
import {userRouter} from "./userRoute.js";
import { employerRouter } from "./employerRoute.js";

router.use('/user',userRouter);
router.use('/employer',employerRouter);

export {router as apiRouting};