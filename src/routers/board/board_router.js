const router = require("express").Router();
const boardCtrl = require("../../controller/board/board_ctrl");

router.get("/header", boardCtrl.board_views.header);
router.get("/detail", boardCtrl.board_views.product);

// router.get("/product_form", boardCtrl.board_write.productForm );
router.get("/product_form", (req, res) => {
    console.log("product_form 라우터로 들어옴")
    boardCtrl.board_write.productForm(req,res) ;
});



router.get("/", boardCtrl.index)

router.post("/submitForm", (req, res) => {
    console.log("submitForm 라우터로 들어옴");
    boardCtrl.submitForm(req, res);
});



module.exports = router;