
const Inventory = require("../models/Inventory");

const addInventory = async (req, res) => {
  try {
    const { product, quantity, price, costPrice, location, remarks } = req.body;

    // Check if inventory already exists for the product
    const existingInventory = await Inventory.findOne({ product });
    if (existingInventory) {
      return res.status(400).json({ message: "Inventory for this product already exists" });
    }

    const newInventory = new Inventory({
      product,
      quantity,
      price,
      costPrice,
      location,
      remarks,
    });

    await newInventory.save();
    res.status(201).json({ message: "Inventory added successfully", data: newInventory });
  } catch (error) {
    console.error("Error adding inventory:", error);
    res.status(500).json({ message: "Server error" });
  }
};

const updateInventory = async (req, res) => {
  try {
    const inventoryId = req.params.id;
    const updates = req.body;

    const updatedInventory = await Inventory.findByIdAndUpdate(
      inventoryId,
      updates,
      { new: true, runValidators: true }
    );

    if (!updatedInventory) {
      return res.status(404).json({ message: "Inventory item not found" });
    }

    res.status(200).json({
      message: "Inventory updated successfully",
      data: updatedInventory,
    });
  } catch (error) {
    console.error("Error updating inventory:", error);
    res.status(500).json({ message: "Server error" });
  }
};


module.exports = {
  addInventory,
  updateInventory
};
