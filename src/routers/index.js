import express from "express";
const router = express.Router();

import contactrouter from "./contactrouter";
import expenserouter from "./expenserouter";
import incomerouter from  './incomerouter';
import paymentrouter from "./paymentsrouter";
import banktransferrouter from "./banktransferrouter";
import departmentrouter from "./departmentrouter";
import salesrouter from "./salesrouter";
import userRouter from './userRouter';

router.use("/contact",contactrouter);
router.use("/expense",expenserouter);
router.use("/income",incomerouter);
router.use("/payment",paymentrouter);
router.use("/banktransfer",banktransferrouter);
router.use("/department",departmentrouter);
router.use("/sales",salesrouter);
router.use("/user",userRouter);

export default router;