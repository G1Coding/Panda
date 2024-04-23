const dao = require("../../database/admin/adminDAO")

const process = {
    loginChk : (body) => {
        const result = user.filter(id => id.id === body.id)
        return result;
    },
}



module.exports = {
    process,
}