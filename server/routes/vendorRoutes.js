const express = require("express");
const router = express.Router();
const controller = require("../controllers/vendorController");
router.get("/", controller.getVendors);
router.get("/:id", controller.getVendorById);
router.post("/", controller.addVendor);
router.put("/:id", controller.updateVendor);
router.delete("/:id", controller.deleteVendor);
module.exports = router;