const billModel = require("../models/bill.model");

class BillController {
    index(req, res, next) {
        billModel
            .find({})
            .then((bills) => res.json({ ok: true, bills: bills }))
            .catch((err) => res.status(401).json({ msg: "Error: " + err }));
    }

    getBillByUserEmail(req, res) {
        const email = req.params.email
        billModel.find({email: email})
        .then(bills => res.json(bills))
        .catch(err => res.status(500).json({msg: "Failed to fetch!"}))
    }

    getBillById(req, res) {
        const id = req.params.id;

        billModel
            .findById(id)
            .then((bill) => res.json({ bill: bill, ok: true }))
            .catch((err) => res.status(401).json({ msg: "Error: " + err }));
    }

    create(req, res) {
        var billPayload = req.body;

        billModel
            .create(billPayload)
            .then((bill) => {
                res.json(bill);
            })
            .catch((err) => res.status(401).json({ msg: "Error: " + err }));
    }

    update(req, res) {
        var billPayload = req.body;

        billModel
            .findByIdAndUpdate(billPayload._id, billPayload)
            .then(() => {
                res.json({ ok: true });
            })
            .catch((err) => res.status(401).json({ msg: "Error: " + err }));
    }

    delete(req, res) {
        var id = req.params.id;
        billModel
            .findByIdAndDelete(id)
            .then(() => res.json({ ok: true }))
            .catch((err) => res.status(401).json({ msg: "Error: " + err }));
    }
}

module.exports = new BillController();
