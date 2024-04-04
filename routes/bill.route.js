var express = require("express");
var billRouter = express.Router();
var billCtrl = require("../controllers/bill.controller");

billRouter.get("/user/:email", billCtrl.getBillByUserEmail);
billRouter.get("/:id", billCtrl.getBillById);
billRouter.get("/", billCtrl.index);
billRouter.post("/create", billCtrl.create);
billRouter.put("/update", billCtrl.update);
billRouter.delete("/delete/:id", billCtrl.delete);

module.exports = billRouter;
