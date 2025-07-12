const express = require('express');
const mongoose = require('mongoose');  
const bodyParser = require('body-parser');
const ProductData = require('./models/Inventory.js');
const Inventory = require('./models/Product.js');
const inventoryRoutes = require('./routes/inventoryRoutes.js');


const app = express();
const PORT = process.env.PORT || 3000; 
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/inventoryDB', {
  useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('MongoDB connection error:', err);
});

// app.get("/Home", (req, res) => {
//   res.send("Welcome to the Inventory Management System");
// });
// Use routes
app.use("/api/inventory", inventoryRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

