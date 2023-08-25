import express from "express";
const router = express.Router();
import controller from "../controllers/index";
import multer from "multer";
var upload = multer().array();

router.post("/login", upload, controller.userController.login);
router.post("/adduser", upload, controller.userController.addUser);

export default router;