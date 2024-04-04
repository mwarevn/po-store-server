var express = require("express");
var userRouter = express.Router();
var userCtrl = require("../controllers/user.controller");

userRouter.get("/:id", userCtrl.getUserById);
userRouter.get("/", userCtrl.index);
userRouter.post("/create", userCtrl.create);
userRouter.put("/update", userCtrl.update);
userRouter.delete("/delete/:id", userCtrl.delete);

module.exports = userRouter;
