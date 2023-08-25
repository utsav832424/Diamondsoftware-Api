import express from "express";
const router = express.Router();
import controller from "../controllers/index";
import multer from "multer";
var upload = multer().array();

router.post("/addsales",upload,controller.salesController.addSales);
router.get("/getsales/:id",upload,controller.salesController.getSales);
router.post("/updatesales",upload,controller.salesController.updatesales);
router.post("/deletesales/:id",upload,controller.salesController.deleteSales);

export default router;