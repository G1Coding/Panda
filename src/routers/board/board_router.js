const router = require("express").Router();
const boardCtrl = require("../../controller/board/board_ctrl");

router.get("/board", boardCtrl.board_views.board);



module.exports = router;