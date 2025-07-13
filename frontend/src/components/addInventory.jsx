import { useState } from "react";
import { addInventory } from "../services/inventoryAPI";

const AddInventory = () => {
  const [formData, setFormData] = useState({
    product: "",
    quantity: 0,
    price: 0,
    costPrice: 0,
    location: "Main Store",
    remarks: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: ["quantity", "price", "costPrice"].includes(name) ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
     const trimmedData = {
      ...formData,
      product: formData.product.trim(),
      location: formData.location.trim(),
      remarks: formData.remarks.trim(),
    };

    await addInventory(trimmedData);
      alert("Inventory added successfully");
      setFormData({
        product: "",
        quantity: 0,
        price: 0,
        costPrice: 0,
        location: "Main Store",
        remarks: "",
      });
    } catch (error) {
      console.error("Error adding inventory:", error);
      alert(" Failed to add inventory. Please try again.");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-xl rounded-2xl mt-10">
      <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">📦 Add Inventory</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          name="product"
          placeholder="Product ID (MongoDB ObjectId)"
          value={formData.product}
          onChange={handleChange}
          required
          className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          name="quantity"
          type="number"
          placeholder="Quantity"
          value={formData.quantity}
          onChange={handleChange}
          required
          className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          name="price"
          type="number"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          required
          className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          name="costPrice"
          type="number"
          placeholder="Cost Price"
          value={formData.costPrice}
          onChange={handleChange}
          className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          name="remarks"
          placeholder="Remarks"
          value={formData.remarks}
          onChange={handleChange}
          className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
        >
          ➕ Add Inventory
        </button>
      </form>
    </div>
  );
};

export default AddInventory;
