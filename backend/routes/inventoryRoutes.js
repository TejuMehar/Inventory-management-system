const express = require("express");
const router = express.Router();
const { addInventory,updateInventory } = require("../controllers/inventoryController.js");


// POST /api/inventory/add
router.post("/add", addInventory);
router.put("/update/:id",updateInventory);


module.exports = router;

