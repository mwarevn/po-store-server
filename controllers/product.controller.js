const catsModel = require("../models/cats.model");
const productModel = require("../models/product.model");

class ProductController {
    index(req, res, next) {
        productModel
            .find({})
            .then((products) => res.json({ ok: true, products: products }))
            .catch((err) => res.status(401).json({ msg: "Error: " + err }));
    }

    getProductById(req, res) {
        const id = req.params.id;

        productModel
            .findById(id)
            .then((product) => res.json({ product: product, ok: true }))
            .catch((err) => res.status(401).json({ msg: "Error: " + err }));
    }

    async getProductsByCate(req, res) {
        const cateName = req.params.cate;

        console.log(123);
        console.log(cateName);

        if (!cateName || cateName == "" || cateName == "all") {
            productModel
                .find({})
                .then((products) => {
                    res.json({ ok: true, products: products });
                })
                .catch((err) => res.status(401).json({ msg: "Error: " + err }));
            return;
        }

        const existsCate = await catsModel.findOne({ name: cateName });

        if (!existsCate) {
            res.status(401).json({ msg: "Error: This type is not exists!" });
            return;
        }

        productModel
            .find({ catsId: existsCate._id })
            .then((products) => {
                res.json({ ok: true, products: products });
            })
            .catch((err) => res.status(401).json({ msg: "Error: " + err }));
    }

    create(req, res) {
        const productPayload = req.body;

        productModel
            .create(productPayload)
            .then((product) => res.json({ ok: true, product: product }))
            .catch((err) => res.status(401).json({ msg: "Error: " + err }));
    }

    update(req, res) {
        const productPayload = req.body;

        productModel
            .findByIdAndUpdate(productPayload._id, productPayload)
            .then((product) => res.json({ ok: true, product: product }))
            .catch((err) => res.status(401).json({ msg: "Error: " + err }));
    }

    delete(req, res) {
        const id = req.params.id;
        productModel
            .findByIdAndDelete(id)
            .then(() => res.json({ ok: true }))
            .catch((err) => res.status(401).json({ msg: "Error: " + err }));
    }
}

module.exports = new ProductController();
