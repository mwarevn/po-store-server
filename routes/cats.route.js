var express = require("express");
var catsRouter = express.Router();
var catsCtrl = require("../controllers/cats.controller");

catsRouter.get("/", catsCtrl.index);
catsRouter.post("/create", catsCtrl.create);
catsRouter.put("/update/:id", catsCtrl.update);
catsRouter.delete("/delete/:id", catsCtrl.delete);

module.exports = catsRouter;
