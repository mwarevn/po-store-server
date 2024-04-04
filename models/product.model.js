var mongoose = require("mongoose");

var productSchema = new mongoose.Schema({
    photo: { type: String },
    name: { type: String },
    description: { type: String },
    price: { type: Number },
    count: { type: Number },
    catsId: { type: mongoose.Schema.ObjectId },
});

var productModel = mongoose.model("products", productSchema);

module.exports = productModel;
