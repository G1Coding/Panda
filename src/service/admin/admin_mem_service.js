const dao = require("../../database/admin/adminMemDAO")

const process = {
    getMem : () => {
        const result = dao.memSelect.getMem()
        return result;
    },
    addMem : (body) => {
        const result = dao.memInsert.addMem(body);
        return result;
    },
    delMem : async (query) => {
        const result = await dao.memDelete.delMem(query)
        return result;
    },
    modMem : async (body) => {
        const result = await dao.memUpdate.modMem(body);
        return result;
    },
    memIdChk : async (id) => {
        const result = await dao.memSelect.idChk(id);
        return result;
    }
}

const readUser = {
    oneUser : async (query) => {
        const user = await dao.memSelect.getUser(query);
        return user;
    }
}

const sendMsg = {
    msg : (msg, url) => {
        return `
        <script>
            alert('${msg}');
            location.href = "${url}";
        </script>
    `
    }
}


module.exports = {
    process,
    sendMsg,
    readUser,
}