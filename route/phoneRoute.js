const express = require("express");
const router = express.Router();

const phoneService = require("../service/phoneService")

router.get("/get",phoneService.getPhone);
router.get("/getById/:id",phoneService.getById);
router.post("/add",phoneService.addPhone);
router.put("/update/:id",phoneService.updatePhone);
router.delete("/delete/:id",phoneService.deleteDirectory);
module.exports = router;