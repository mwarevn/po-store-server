const catsModel = require("../models/cats.model");

class CatsController {
    index(req, res, next) {
        catsModel
            .find({})
            .then((cats) => res.json({ ok: true, cats: cats }))
            .catch((err) => res.status(401).json({ msg: "Wrong, please try again!" }));
    }

    async create(req, res) {
        var cats = req.body;

        var existsCats = await catsModel.find({ name: cats.name });

        if (existsCats.length > 0) {
            res.status(401).json({ msg: "Danh mục này đã tồn tại!" });
            return;
        }

        catsModel
            .create(cats)
            .then((cate) => res.json({ ok: true, cate: cate }))
            .catch((err) => res.status(401).json({ msg: "Wrong, please try again!" }));
    }

    async update(req, res) {
        var cate = req.body;
        catsModel
            .findOneAndUpdate({ _id: cate._id }, cate)
            .then(() => res.json({ ok: true }))
            .catch((err) => res.status(401).json({ msg: "Wrong: " + err }));
    }

    delete(req, res) {
        var cateId = req.params.id;
        catsModel
            .findOneAndDelete(cateId)
            .then(() => res.json({ ok: true }))
            .catch((err) => res.status(401).json({ msg: "Wrong, please try again!" }));
    }
}

module.exports = new CatsController();
