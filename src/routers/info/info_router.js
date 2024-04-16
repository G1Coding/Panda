const router = require("express").Router();
const infoCtrl = require("../../controller/info/info_controller");

router.get("/profile", infoCtrl.info_views.profile);
router.get("/productM", infoCtrl.info_views.productM)
router.get("/history", infoCtrl.info_views.history)
router.get("/inquiry", infoCtrl.info_views.inquiry)
router.get("/upload", infoCtrl.info_views.upload)
router.get("/inquiry_form", infoCtrl.info_views.inquiryForm)


/*
const upload=require("../../../config/file/file_config")
router.post("/modify", upload.single("image_file_name"),
    infoCtrl.info_process.modify)
*/

const upload=require("../../../config/file/file_config")
router.post("/upload", upload.single("image_file_name"), function(req, res){
    res.send("파일 업로드 완료")
})

module.exports = router;