const router = require("express").Router();
const mainCtrl = require("../../controller/main/main_controller");


router.get("/", mainCtrl.view.getMain);
router.get("/get_listView", mainCtrl.view.getMain_board);

module.exports = router;
