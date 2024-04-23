module.exports = (app) => {
    const express = require("express");
    const router = express.Router();
    const adminCtrl = require("../../controller/admin/admin_controller");
    const adminMemCtrl = require("../../controller/admin/admin_mem_controller");
    const adminProdCtrl = require("../../controller/admin/admin_prod_controller");
    const multer = require("multer");

    const stg = multer.diskStorage({
        destination : (req, file, cb) => {
            cb(null, "resources/upload/image");
        },
        filename : (req, file, cb) => {
            cb(null, file.originalname)
        }
    })
    const f_filter = (req, file, cb) => {
        console.log("f_filter file : ", file.mimetype.split("/"))
        const type = file.mimetype.split("/");
        if (type[1] == "jpg" || type[1] == "jpeg" || type[1] == "png") {
            cb(null, true);
        } else {
            req.fileValidation = 0;
            cb(null, false);
        }
    }

    const upload = multer({storage : stg, fileFilter : f_filter})

    router.get("/", adminCtrl.admin_view.index);


    router.get("/mng_mem", adminMemCtrl.admin_view.mngMem)
    router.get("/mng_mem_add", adminMemCtrl.admin_view.mngMemAdd)
    router.get("/mng_mem_id_check", adminMemCtrl.admin_view.mngMemIdChk)
    router.post("/mng_mem_add_check", adminMemCtrl.admin_process.mngMemAddChk)
    router.post("/mng_mem_mod_check", adminMemCtrl.admin_process.mngMemModChk)
    router.get("/mng_mem_del", adminMemCtrl.admin_process.mngMemDel)
    router.get("/mng_mem_Mod", adminMemCtrl.admin_view.mngMemMod)
    

    router.get("/mng_prod", adminProdCtrl.admin_view.mngProd)
    router.get("/mng_get_prod", adminProdCtrl.admin_process.getProdList)
    router.get("/mng_get_prod_search", adminProdCtrl.admin_process.getProdSearch)
    router.get("/mng_get_prod_search_list", adminProdCtrl.admin_process.getProdSearchList)
    router.get("/mng_prod_del", adminProdCtrl.admin_process.mngProdDel)
    router.get("/mng_prod_Mod", adminProdCtrl.admin_view.mngProdMod)
    router.post("/mng_prod_mod_check", upload.single("changeImg"), adminProdCtrl.admin_process.mngProdModChk)


    return router;
};

