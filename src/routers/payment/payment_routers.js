const router = require("express").Router();
const paymentCtrl = require("../../controller/payment/payment_controller");


router.get("/point", paymentCtrl.view.getPoint);
router.get("/buyerPage", paymentCtrl.view.getBuyer);


module.exports = router;