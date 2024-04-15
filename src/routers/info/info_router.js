const router = require("express").Router();
const infoCtrl = require("../../controller/info/info_controller");

router.get("/profile", infoCtrl.info_views.profile);
router.get("/productM", infoCtrl.info_views.productM)
router.get("/history", infoCtrl.info_views.history)
router.get("/comment", infoCtrl.info_views.comment)
router.get("/upload", infoCtrl.info_views.upload)

const upload=require("../../../config/file/file_config")
router.post("/modify", upload.single("image_file_name"),
    infoCtrl.info_process.modify)

/*
const upload=require("../../../config/file/file_config")
router.post("/upload", upload.single("image_file_name"),(req, res)=>{
    res.json(req.file)
    console.log(req.file)
})
*/
module.exports = router;