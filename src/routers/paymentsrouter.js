import express from 'express';
const router = express.Router();
import controller from '../controllers/index';
import multer from "multer";
var upload = multer().array();

router.post("/addpayment",upload,controller.paymentscontroller.addPayment);
router.get("/getpayment/:id",upload,controller.paymentscontroller.getPayment);
router.post("/updatepayment",upload,controller.paymentscontroller.updatePayment);
router.post("/deletepayment/:id",upload,controller.paymentscontroller.deletepayment);

export default router;