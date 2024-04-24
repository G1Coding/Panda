const service = require("../../service/payment/payment_service");

const view = {
  getPoint : (req, res) => {
    res.render("payment/point");
  },
  getBuyer : (req, res) => {
    res.render("payment/buyerPage");
  },
  getSeller : (req, res) => {
    res.render("payment/sellerPage");
  }

}
const getData = {
  getBuyerPage : async (req, res) => {
    const result = await service.get.getBuyerPage(req.params.board_num);

    res.json(result.rows);
  },
  getSellerOk : async (req, res) => {
    const result = await service.get.getSellerOk(req.params.board_num);

    res.json(result.rows);
  },
  getSellerPage : async (req, res) => {
    const result = await service.get.getSellerPage(req.params.board_num);

    res.json(result.rows);
  },
  getBuyerOk : async (req, res) => {
    const result = await service.get.getBuyerOk(req.params.board_num);

    res.json(result.rows);
  }
}

const setData = {
  setBuyerOk : async (req, res) => {
    const result = await service.set.setBuyerOk(req.params.board_num);

    res.json(result.rows);
  },
  setBuyerCancel : async (req, res) => {
    service.set.setBuyerCancel(req.params.board_num);

    // 나중에 취소버튼 누르면 돌아갈 페이지로 보내주기
    const result = {value : 0};

    res.json(result);
  },
  setSellerOk : async (req, res) => {
    const result = await service.set.setSellerOk(req.params.board_num);
    res.json(result.rows);
  },
  setTradeSuccess : async (req, res) => {
    service.set.setTradeSuccess(req.params.price, req.params.sellerId, req.params.buyerId);

    res.json(0);
  },
  setPoint : async (req, res) => {

    service.set.setPoint(req.cookies.user_id, req.params.price);

    res.json(0);
  }
}

module.exports = { view, getData, setData };