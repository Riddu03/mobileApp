const express = require("express");
const router = express.Router();
const controller = require("../controllers/categoryController");
console.log("Controller Loaded:", controller);
router.get("/", controller.getCategories);
router.get("/industry/:industryid", controller.getCategoryByIndustryId);

router.get("/:id", controller.getCategory);
router.post("/", controller.createCategory);
router.put("/:id", controller.updateCategory);
router.delete("/:id", controller.deleteCategory);
module.exports = router;