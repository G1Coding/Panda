module.exports = (app)=>{
  const cookieParser = require("cookie-parser");
  const paymentRouter = require("./src/routers/payment/payment_routers");
  const mainRouter = require("./src/routers/main/main_routers");
  const loginRouter = require("./src/routers/login/login_routers");

  app.use( cookieParser() );
  app.use("/payment", paymentRouter );
  app.use("/", mainRouter );
  app.use("/login", loginRouter );

  const router = require("express").Router();

  return router;
}

