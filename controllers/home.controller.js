class HomeController {
    index(req, res, next) {
        var page = req.query.page;
        if (!page) page = "product";
        res.render("home/index", { page: page });
    }
}

module.exports = new HomeController();
