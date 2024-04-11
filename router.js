module.exports = (app) => {
    const boardRouter = require("./src/routers/board/board_router");
    app.use("/board", boardRouter);

    const router = require("express").Router();
    router.get("/", (req, res) => {
        res.send("초기 페이지");
    })

    return router;
}