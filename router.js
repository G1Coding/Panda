module.exports = (app) => {
    const boardRouter = require("./src/routers/board/board_router");
    app.use("/board", boardRouter);

    console.log("board 라우터 연결")

    const router = require("express").Router();
    router.get("/", (req, res) => {
        res.render("index");
    })

    return router;
}