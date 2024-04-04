var express = require("express");
var authRouter = express.Router();
var authCtrl = require("../controllers/auth.controller");

authRouter.get("/login", (req, res) => {
    res.render("auth/login.ejs");
});

authRouter.get("/register", (req, res) => {
    res.render("auth/register.ejs");
});

authRouter.post("/register", authCtrl.register);
authRouter.post("/login", authCtrl.login);

module.exports = authRouter;
