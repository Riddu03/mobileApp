const express = require("express");
const router = express.Router();
const controller = require("../controllers/industryController");
console.log("Controller Loaded:", controller);

router.get("/", controller.getIndustries);
router.get("/:id", controller.getIndustryById);
router.post("/", controller.addIndustry);
router.put("/:id", controller.updateIndustry);
router.delete("/:id", controller.deleteIndustry);
module.exports = router;