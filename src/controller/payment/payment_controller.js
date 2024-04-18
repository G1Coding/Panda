const service = require("../../service/payment/payment_service");

const view = {
  getPoint : (req, res) => {
    res.render("payment/point");
  },
  getBuyer : (req, res) => {

    res.render("payment/buyerPage");
  }

}
const getData = {
  getBuyerPage : async (req, res) => {
    const result = await service.getBuyerPage.getBuyerPage(req.params.board_num);

    res.json(result.rows);
  }
}

module.exports = { view, getData };