const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  description: { type: String, trim: true },
  price: { type: Number, required: true, min: 0 },
  oldPrice: { type: Number, min: 0 },
  category: { type: String, required: true, trim: true, enum: ["PHONE","COMPUTER","SMARTWATCH", "CAMERA","HEADPHONE","GAMING"] },
  image: {
    url: { type: String, required: true },
    filename: { type: String }
  },
  stock: { type: Number, default: 0, min: 0 }
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
