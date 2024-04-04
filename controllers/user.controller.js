const userModel = require("../models/user.model");

class UserController {
    index(req, res, next) {
        userModel
            .find({})
            .then((users) => res.json({ ok: true, users: users }))
            .catch((err) => res.json({ msg: err }));
    }

    getUserById(req, res) {
        const id = req.params.id;

        userModel
            .findById(id)
            .then((user) => res.json({ user: user, ok: true }))
            .catch((err) => res.status(401).json({ msg: "Error: " + err }));
    }

    async create(req, res) {
        const user = req.body;

        const existsUser = await userModel.findOne({ email: user.email });

        if (existsUser) {
            res.status(401).json({ msg: "Email đã tồn tại" });
            return;
        }

        userModel
            .create(user)
            .then((userResponse) => res.json({ ok: true, user: userResponse }))
            .catch((err) => res.status(401).json({ msg: "Error: " + err }));
    }

    update(req, res) {
        const user = req.body;
        userModel
            .findByIdAndUpdate(user._id, user)
            .then(() => res.json({ ok: true, user: user }))
            .catch((err) => res.status(401).json({ msg: "Error: " + err }));
    }

    delete(req, res) {
        const id = req.params.id;
        userModel
            .findByIdAndDelete(id)
            .then(() => res.json({ ok: true }))
            .catch((err) => res.status(401).json({ msg: "Error: " + err }));
    }
}

module.exports = new UserController();
