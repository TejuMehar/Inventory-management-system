
const Inventory = require("../models/Inventory");

// Add inventory

const addInventory = async (req, res) => {
  try {
    const { product, quantity, price, costPrice, location, remarks } = req.body;

    // Check if inventory already exists for the product
    const existingInventory = await Inventory.findOne({ product });
    if (existingInventory) {
      return res.status(400).json({ message: "Inventory for this product already exists" });
    }

    const newInventory = new Inventory({
      product, quantity,price,costPrice,location,remarks,});

    await newInventory.save();
    res.status(201).json({ message: "Inventory added successfully", data: newInventory });
    console.log("Inventory added successfully:", newInventory);
  } catch (error) {
    console.error("Error adding inventory:", error);
    res.status(500).json({ message: "Server error" });
  }
};

//Update inventory
const updateInventory = async (req, res) => {
  try {
    const inventoryId = req.params.id;
    const updatedData = req.body;

    const updatedInventory = await Inventory.findByIdAndUpdate(
      inventoryId,
      updatedData,
      { new: true }
    );

    if (!updatedInventory) {
      return res.status(404).json({ message: "Inventory item not found" });
    }

    res.status(200).json(updatedInventory);
  } catch (error) {
    console.error("Error updating inventory:", error);
    res.status(500).json({ message: "Server error while updating inventory" });
  }
};


module.exports = {addInventory,updateInventory};
