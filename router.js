module.exports = (app)=>{
  const cookieParser = require("cookie-parser");
  const paymentRouter = require("./src/routers/payment/payment_routers");
  const mainRouter = require("./src/routers/main/main_routers");
  const loginRouter = require("./src/routers/login/login_routers");
  const chatRouter = require("./src/routers/chat/chat_router")(app)
  const adminRouter = require("./src/routers/admin/router")(app)
  const commonRouter = require("./src/routers/common/common_routers")
  const boardRouter = require("./src/routers/board/board_router");

  app.use( cookieParser() );
  app.use("/payment", paymentRouter );
  app.use("/", mainRouter );
  app.use("/login", loginRouter );
  app.use("/chat", chatRouter);
  app.use("/admin", adminRouter);
  app.use("/common", commonRouter);
  app.use("/board", boardRouter);
  console.log("board 라우터 연결")

  const router = require("express").Router();

     router.get("/", (req, res) => {
        res.render("index");
    })


  return router;
}



