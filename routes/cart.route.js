var express = require("express");
var cartRouter = express.Router();
var cartCtrl = require("../controllers/cart.controller");

cartRouter.get("/:idUser", cartCtrl.getCartByIdUser);
cartRouter.post("/create", cartCtrl.create);
cartRouter.put("/update", cartCtrl.create);

module.exports = cartRouter;
