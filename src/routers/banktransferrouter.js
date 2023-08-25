import express from "express";
import multer from "multer";
var upload = multer().array();
const router = express.Router();
import controller from "../controllers/index";

router.post("/addbanktransfer", upload, controller.bantransfercontroller.addBanktransfer);
router.get("/getbanktransfer/:id", upload, controller.bantransfercontroller.getBanktransfer);
router.post("/updatebanktransfer", upload, controller.bantransfercontroller.updateBanktransfer);
router.post("/deletebanktransfer/:id", upload, controller.bantransfercontroller.deletebanktransfer);

export default router;