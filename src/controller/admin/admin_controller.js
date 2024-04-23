const service = require("../../service/admin/admin_service")
const cookieConfig = require("../../../config/cookie_session/config")
const fs = require("fs");

const admin_view = {
    index : (req, res) => {
        res.render("admin/admin_main")
    },
}

module.exports = {
    admin_view,
}