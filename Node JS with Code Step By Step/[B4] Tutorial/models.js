const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: String,
  price: String,
  category: String,
});

const ProductModel = mongoose.model("products", ProductSchema);

module.exports = ProductModel;
