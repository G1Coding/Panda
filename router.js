module.exports = (app)=>{
  const cookieParser = require("cookie-parser");
  const paymentRouter = require("./src/routers/payment/payment_routers");
  const mainRouter = require("./src/routers/main/main_routers");
  const loginRouter = require("./src/routers/login/login_routers");
  const chatRouter = require("./src/routers/chat/chat_router")(app)
  const adminRouter = require("./src/routers/admin/router")(app)

  app.use( cookieParser() );
  app.use("/payment", paymentRouter );
  app.use("/", mainRouter );
  app.use("/login", loginRouter );
  app.use("/chat", chatRouter);
  app.use("/admin", adminRouter);

  const router = require("express").Router();

  return router;
}




// module.exports = (app) => {
//   const router = require("express").Router();

//   router.get("/", (req, res) => {
//       res.render("index")
//   })
//   return router;
// }