const mongoose = require("mongoose");

const FruitSchema = new mongoose.Schema({
  name: String,
  price: String,
});

const FruitModel = mongoose.model("fruits", FruitSchema);

module.exports = FruitModel;
