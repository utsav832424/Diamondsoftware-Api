import express from "express";
const router = express.Router();
import controller from "../controllers/index";
import multer from "multer";
var upload = multer().array();

router.post("/addincome",upload,controller.incomecontroller.addIncome);
router.get("/getincome/:id",upload,controller.incomecontroller.getIncome);
router.post("/updateincome",upload,controller.incomecontroller.updateIncome);
router.post("/deleteincome/:id",upload,controller.incomecontroller.deleteIncome);

export default router;