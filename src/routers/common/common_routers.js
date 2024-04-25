const router = require("express").Router();
const commonCtrl = require("../../controller/common/common_controller");

router.get("/get_isAdmin", commonCtrl.get.get_isAdmin);


module.exports = router;
