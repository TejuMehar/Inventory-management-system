const mongoose = require('mongoose'); 
const productSchema = new mongoose.Schema({ 
productType: { 
type: String, 
required: true 
}, 
products: [ 
{ 
name: { 
type: String, 
required: true 
} 
} 
] 
}, { timestamps: true }); 
const ProductData = mongoose.models.ProductData || mongoose.model('ProductData', 
productSchema); 
module.exports = ProductData;