const mongoose = require("mongoose");

const inventorySchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
    unique: true,
  },
  quantity: {
    type: Number,
    required: true,
    default: 0,
  },
  price: {
    type: Number,
    required: true,
  },
  costPrice: {
    type: Number,
    default: 0,
  },
  location: {
    type: String,
    default: "Main Store",
  },
  remarks: {
    type: String,
    default: "",
  },
}, {
  timestamps: true,
});


const Inventory = mongoose.models.Inventory || mongoose.model("Inventory", inventorySchema);
module.exports = Inventory;
