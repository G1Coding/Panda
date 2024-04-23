const router = require("express").Router();
const infoCtrl = require("../../controller/info/info_controller");
const upload=require("../../../config/file/file_config")

router.get("/profile", infoCtrl.info_views.profile);
/*
router.get("/profile", async (req, res)=>{
    try{
        const ratingInfo= await Service.getRatingInfo()
        res.render("profile",{profile, ratingInfo})
    }catch(err){
        console.log(err)
    }
})
*/
router.get("/productM", infoCtrl.info_views.productM)
router.get("/history", infoCtrl.info_views.history)
router.get("/inquiry", infoCtrl.info_views.inquiry)
router.get("/upload", infoCtrl.info_views.upload)
router.get("/inquiry_form", infoCtrl.info_views.inquiryForm)
router.get("/infoModify_form", infoCtrl.info_views.modifyForm)
router.post("/modify", upload.single("image_file_name"),
        infoCtrl.info_process.modify);
router.get("/delete", infoCtrl.info_process.delete)

router.get("/list", infoCtrl.info_views.list)
//router.get("/delList", infoCtrl.info_views.delList)

router.get("/starList", infoCtrl.info_views.starList)
router.get("/register_form", infoCtrl.info_views.registerForm)
router.post("/register", infoCtrl.info_process.register)
router.get("/member_view", infoCtrl.info_views.memberView) // /member_view/:id
router.get("/star_form", infoCtrl.info_views.starForm)
router.post("/star", infoCtrl.info_process.star)

/*
const upload=require("../../../config/file/file_config")
router.post("/modify", upload.single("image_file_name"),
    infoCtrl.info_process.modify)
*/

router.post("/upload", upload.single("image_file_name"), function(req, res){
    res.send("파일 업로드 완료")
})

//router.post("/inquiryF", upload.single("image_file_name"),
  //      infoCtrl.info_process.inquiryF);

module.exports = router;