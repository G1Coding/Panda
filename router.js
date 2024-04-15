module.exports = (app) => {
    const infoRouter = require("./src/routers/info/info_router");
    app.use("/info", infoRouter);
/*
    const router = require("express").Router();
    router.get("/info", (req, res) => {
        res.send("index");
    })
*/
    const router = require("express").Router();
    router.get("/info", (req, res) => {
        res.render("profile");
    })

    return router;
}