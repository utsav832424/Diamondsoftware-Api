import express from "express";
import controller from "../controllers/index";
const router = express.Router();
import multer from "multer";
var upload = multer().array();

router.post("/addcontact",upload,controller.contactcontroller.addContact);
router.get("/getcontact/:id",upload,controller.contactcontroller.getContact);
router.post("/updatecontact",upload,controller.contactcontroller.updateContact);
router.post("/deletecontact/:id",upload,controller.contactcontroller.deleteContact);

export default router;