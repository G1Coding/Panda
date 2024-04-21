module.exports = (app) => {
    const express = require("express");
    const router = express.Router();
    const adminCtrl = require("../../controller/admin/admin_controller");

    // Socket.IO 객체를 컨트롤러로 전달
    router.get("/", adminCtrl.admin_view.index);
    router.get("/mng_mem", adminCtrl.admin_view.mngMem)
    router.get("/mng_mem_add", adminCtrl.admin_view.mngMemAdd)
    router.post("/mng_mem_add_check", adminCtrl.admin_process.mngMemAddChk)
    router.post("/mng_mem_mod_check", adminCtrl.admin_process.mngMemModChk)
    router.get("/mng_mem_del", adminCtrl.admin_process.mngMemDel)
    router.get("/mng_mem_Mod", adminCtrl.admin_view.mngMemMod)
    
    
    
    router.get("/mng_prod", adminCtrl.admin_view.mngProd)
    router.get("/mng_get_prod", adminCtrl.admin_process.getProdList)
    router.get("/mng_get_prod_search", adminCtrl.admin_process.getProdSearch)
    router.get("/mng_get_prod_search_list", adminCtrl.admin_process.getProdSearchList)


    return router;
};

