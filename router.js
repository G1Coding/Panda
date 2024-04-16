module.exports = (app)=>{
  const paymentRouter = require("./src/routers/payment/payment_routers");
  const mainRouter = require("./src/routers/main/main_routers");
  
  app.use("/payment", paymentRouter );
  app.use("/", mainRouter );

  const router = require("express").Router();

  return router;
}

