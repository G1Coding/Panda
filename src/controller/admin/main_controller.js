const cookieConfig = require("../../../config/cookie_session/config")
const fs = require("fs");

const admin_view = {
    index : (req, res) => {
        res.render("admin/main")
    },
}

module.exports = {
    admin_view,
}