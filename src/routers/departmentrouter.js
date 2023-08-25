import experss from "express";
const router = experss.Router();
import controller from "../controllers/index";
import multer from "multer";
var upload = multer().array();

router.post("/adddepartment", upload, controller.departmentController.addDepartment);
router.get("/getdepartment", upload, controller.departmentController.getDepartment);
router.post("/updatedepartment", upload, controller.departmentController.updateDepartment);
router.post("/deletedepartment/:id", upload, controller.departmentController.deleteDepartment);

export default router;