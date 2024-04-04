var jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");

class AuthController {
    async authToken(req, res, next) {
        // var isValidatedToken = false;
        // var token = req.cookies.token;

        // if (req.path == "/auth/login" || req.path == "/auth/register") {
        //     next();
        //     return;
        // }

        // if (!token || token == "") {
        // } else {
        //     try {
        //         await jwt.verify(token, process.env.PRIVATE_KEY, (err, decoded) => isValidatedToken == decoded);
        //     } catch (error) {}
        // }

        // if (isValidatedToken) {
        //     next();
        // } else {
        //     res.redirect("/auth/login");
        // }

        // =============================== //

        // var isValidatedEmail = false;
        // var email = req.cookies.email;

        // if (req.path == "/auth/login" || req.path == "/auth/register") {
        //     next();
        //     return;
        // }

        // if (!email || email == "") {
        // } else {
        //     isValidatedEmail = true;
        // }

        // if (isValidatedEmail) {
        //     next();
        // } else {
        //     res.redirect("/auth/login");
        // }

        next();
    }

    register(req, res) {
        var registerPayload = req.body;

        userModel
            .create(registerPayload)
            .then((user) => res.json({ user: user }))
            .catch((err) => res.status(401).json({ msg: "Có lỗi xảy ra: " + err }));
    }
    login(req, res) {
        var user = req.body;
        userModel
            .findOne({ email: user.email })
            .then((existsUser) => {
                if (existsUser && user.password == existsUser.password) {
                    res.json({ ok: true, user: existsUser });
                } else {
                    res.status(401).json({ msg: "Invalid email or password!" });
                }
            })
            .catch((err) => res.status(500).json({ msg: "Server error!" }));
    }
}

module.exports = new AuthController();
