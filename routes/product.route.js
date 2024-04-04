var express = require("express");
var productRouter = express.Router();
var productCtrl = require("../controllers/product.controller");

productRouter.get("/:id", productCtrl.getProductById);
productRouter.get("/cate/:cate", productCtrl.getProductsByCate);
productRouter.get("/", productCtrl.index);
productRouter.post("/create", productCtrl.create);
productRouter.put("/update", productCtrl.update);
productRouter.delete("/delete/:id", productCtrl.delete);

module.exports = productRouter;
