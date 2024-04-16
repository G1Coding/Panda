const service = require("../../service/payment/payment_service");

const view = {
  getPoint : (req, res) => {
    res.render("payment/point");
  },
  getBuyer : (req, res) => {
    res.render("payment/buyerPage");
  }

}

module.exports = { view };