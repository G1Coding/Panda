const dao = require("../../database/admin/adminDAO")

const process = {
    loginChk : (body) => {
        const result = user.filter(id => id.id === body.id)
        return result;
    },
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
    getProdTotalContent : () => {
        const totalContent = dao.prodSelect.getProdTotalContent();
        return totalContent;
    },
    getProdContent : async (totalContent, page) => {
        const content = await getProdPage(totalContent.rows[0]['COUNT(*)'], page);
        content.pageContent = await dao.prodSelect.getProdPageContent(content.start, content.end);
        return content
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

const getProdPage = (total, page) => {
    if (page == null) {
        page = 1;
    }
    let content = [];
    let pageContent = 50;
    content.page = parseInt(total / pageContent);
    if (total % pageContent != 0) {
        content.page ++;
    }
    content.start = (page - 1) * pageContent +1
    content.end = page*pageContent
    return content;
}



module.exports = {
    process,
    sendMsg,
    readUser,
}