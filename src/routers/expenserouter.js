import express from "express";
const router = express.Router();
import controller from "../controllers/index";
import multer from "multer";
var upload = multer().array();

router.post("/addexpense",upload,controller.expensecontroller.addExpense);
router.get("/getexpense/:id",upload,controller.expensecontroller.getExpense);
router.post("/updateexpense",upload,controller.expensecontroller.updateExpense);
router.post("/deleteexpense/:id",upload,controller.expensecontroller.deleteExpense);

export default router;