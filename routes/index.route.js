const authController = require("../controllers/auth.controller");
const authRouter = require("./auth.route");
const billRouter = require("./bill.route");
const catsRouter = require("./cats.route");
const homeRouter = require("./home.route");
const productRouter = require("./product.route");
const userRouter = require("./user.route");
const cartRouter = require("./cart.route");

const routes = (app) => {
    app.use(authController.authToken);
    app.use("/auth", authRouter);
    app.use("/cats", catsRouter);
    app.use("/product", productRouter);
    app.use("/bill", billRouter);
    app.use("/user", userRouter);
    app.use("/", homeRouter);
    app.use("/cart", cartRouter);
};

module.exports = routes;
