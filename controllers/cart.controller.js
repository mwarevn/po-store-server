const cartModel = require("../models/cart.model");

class CartController {
    getCartByIdUser(req, res) {
        const idUser = req.params.idUser;

        if (!idUser || idUser == "") {
            res.status(401).json({ msg: "Error" });
            return;
        }

        cartModel
            .find({ idUser: idUser })
            .then((carts) => res.json({ ok: true, carts: carts }))
            .catch((err) => {
                res.status(401).json({ msg: "Error" });
            });
    }

    create(req, res) {
        const cart = req.body;

        cartModel
            .create()
            .then((cart) => res.json({ ok: true, cart: cart }))
            .catch((err) => {
                res.status(401).json({ msg: "Error" });
            });
    }

    update(req, res) {
        const cart = req.body;

        cartModel
            .findOneAndUpdate({ _id: cart._id })
            .then((cart) => res.json({ ok: true, cart: cart }))
            .catch((err) => {
                res.status(401).json({ msg: "Error" });
            });
    }
}

module.exports = new CartController();
