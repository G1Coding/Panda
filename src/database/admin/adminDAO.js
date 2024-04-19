const con = require("../common_dao")


const memSelect = {
    getMem : async () => {
        const sql = "select * from user_info order by info_id asc";
        let list;
        try {
            list = (await con).execute(sql)
        } catch(err) {
            console.log(err)
        }
        return list;
    },
    getUser : async (query) => {
        const sql = `select * from user_info where info_id='${query}'`;
        let user;
        try {
            user = (await con).execute(sql)
        } catch(err) {
            console.log(err)
        }
        return user;
    }
}
const memInsert = {
    addMem : async (body) => {
        console.log("meminsert실행")
        const sql = "insert into user_info(info_id, info_pw, info_name, info_phone, info_admin, info_point) values(:id, :pwd, :name, :phone, :admin, 0)"
        let result = 0;
        try{
            result = await (await con).execute(sql, body);
        }catch(err){
            console.log(err)
        }
        console.log("result : ", result)
        return result;
    }
}
const memUpdate = {
    modMem : async (body) => {
        console.log(body)
        console.log(body.id)
        console.log(body.pwd)
        console.log(body.name)
        console.log(body.phone)
        const sql = "update user_info set info_pw=:pwd, info_name=:name, info_phone=:phone, info_admin=:admin WHERE info_id=:id";
        let result;
        try {
            result = (await con).execute(sql, [body.pwd, body.name, body.phone, body.admin, body.id])
            console.log("sql : ", sql)
        } catch (err) {
            console.log(err)
        }
        return result;
    }
}
const memDelete = {
    delMem : async (query) => {
        if (Array.isArray(query)) {
            let setQuery = query.map(item => `'${item}'`)
            const sql = `delete from user_info where info_id in (${setQuery})`
            try {
                result = (await con).execute(sql);
            } catch (err) {
                console.log(err);
            }
        } 
        else {
            const sql = `delete from user_info where info_id='${query}'`
            try {
                result = (await con).execute(sql);
            } catch (err) {
                console.log(err);
            }
        }
        return result;
    }
}
const prodSelect = {
    getProdTotalContent : async () => {
        const sql = "select count(*) from user_board"
        let totalContent;
        try {
            totalContent = (await con).execute(sql);
        } catch (err) {
            console.log(err)
        }
        return totalContent;
    },
    getProdPageContent : async (start, end) => {
        const sql = `select B.* from(select rownum rn, A.* from(select * from user_board order by board_num desc)A)B where rn between ${start} and ${end}`
        let pageContent;
        try {
            pageContent = await (await con).execute(sql);
        } catch(err) {
            console.log(err);
        }
        return pageContent
    }
}


module.exports = {
    memSelect,
    memInsert,
    memUpdate,
    memDelete,
    prodSelect
}