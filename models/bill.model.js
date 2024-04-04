var mongoose = require("mongoose");

var billSchema = new mongoose.Schema(
	{
		productId: { type: mongoose.Schema.ObjectId },
		quantity: Number,
		email: String,
		price: Number,
	},
	{
		timestamps: true,
	}
);

var billModel = mongoose.model("bills", billSchema);

module.exports = billModel;
