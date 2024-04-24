const con = require("../main/common_dao");

const mainSelect = {
    getProdTotalContent : async () => {
        const sql = `select count(*) from user_board`;
        let count;
        try {
            count = (await con).execute(sql)
        } catch(err) {
            console.log(err)
        }
        return count;
    },
    getProdTradeContent : async () => {
        const sql = `select count(*) from user_board where board_istrading = 1`;
        let count;
        try {
            count = (await con).execute(sql)
        } catch(err) {
            console.log(err)
        }
        return count;
    },
    getProdCategoryContent : async () => {
        const sql = 'SELECT board_category, count FROM (SELECT board_category, COUNT(*) AS count FROM user_board GROUP BY board_category ORDER BY COUNT(*) DESC) WHERE ROWNUM <= 3'
        let categoryContent
        console.log("dao실행")
        try {
            console.log("명령어 실행전")
            categoryContent = await (await con).execute(sql);
            console.log("명령어 실행후")
            console.log("content : ", categoryContent)
        } catch (err) {
            console.log(err);
        }
        return categoryContent;
    }
}


module.exports = {
    mainSelect,
}