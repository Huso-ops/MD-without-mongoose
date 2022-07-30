const express = require("express");
const router = express.Router();

const phoneService = require("../service/phoneService")

const phoneController = require("../controller/phoneController");

//router.post("/add",phoneController.add);
router.get("/get",phoneController.get);
router.put("/update/:id",phoneController.update);
router.get("/getById/:id", phoneController.getById);
router.delete("/delete/:id",phoneController.delete);
router.post("/post",phoneController.post);
router.get("/get3",phoneController.getPhone);
router.get("/getid/:id",phoneController.getid);
router.post("/addphone",phoneController.addPhone);
router.put("/update2/:id",phoneController.updatePhone);
router.delete("/delete2/:id",phoneController.deleteDirectory);
module.exports = router;