const service = require("../../service/admin/main_service")


const cookieConfig = require("../../../config/cookie_session/config")
const fs = require("fs");

const admin_view = {
    index : (req, res) => {
        res.render("admin/main")
    },
}

const admin_process = {
    mainGetData : async (req, res) => {
        const prodTotalContent = await service.process.getProdTotalContent();
        const prodTradeContent = await service.process.getProdTradeContent();
        const prodCategoryContent = await service.process.getProdCategoryContent();
        console.log(prodCategoryContent)
        res.json({
            total : prodTotalContent.rows[0]['COUNT(*)'],
            trade : prodTradeContent.rows[0]['COUNT(*)'],
            category : prodCategoryContent.rows
        })
    }
}



module.exports = {
    admin_view,
    admin_process
}