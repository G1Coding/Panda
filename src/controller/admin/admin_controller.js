const service = require("../../service/admin/admin_service")
const cookieConfig = require("../../../config/cookie_session/config")


const admin_view = {
    index : (req, res) => {
        res.render("admin/admin_main")
    },
    mngMem : async (req, res) => {
        const result = await service.process.getMem()
        res.render("admin/admin_mng_mem", {
            result : result.rows
        })
    },
    mngMemAdd : async (req, res) => {
        res.render("admin/admin_mng_mem_add", {
            
        })
    },
    mngMemMod : async (req, res) => {
        const user = await service.readUser.oneUser(req.query.id)
        res.render("admin/admin_mng_mem_mod", {user : user.rows[0]})
    },
    mngProd : async (req, res) => {
        const totalContent = await service.process.getProdTotalContent();
        const content = await service.process.getProdContent(totalContent, req.query.page);
        
        res.render("admin/admin_mng_prod", {
            total : totalContent.rows[0],
            page : content.page,
            pageContent : content.pageContent.rows
        })
    },
}

const admin_process = {
    mngMemAddChk : async(req, res) => {
        const result = await service.process.addMem(req.body)
        console.log("result : ", result)
        if (result.rowsAffected == 1) {
            msg = "회원등록 완료";
            url = "/admin/mng_mem"
            res.send(service.sendMsg.msg(msg, url))
        } else {
            msg = "문제 발생!!";
            url = "/admin/mng_mem_add"
            res.send(service.sendMsg.msg(msg, url))
        }
    },
    mngMemDel : async (req, res) => {
        console.log("reqquery : ", req.query.arr)
        const result = await service.process.delMem(req.query.arr);
        console.log("result : ", result)
        if (result.rowsAffected != 0) {
            msg = "삭제가 완료되었습니다.";
        } else {
            msg = "문제가 발생하였습니다.";
        }
        url = "/admin/mng_mem"
        res.send(service.sendMsg.msg(msg, url))
    },
    mngMemModChk : async (req, res) => {
        console.log("req body : ", req.body)
        const result = await service.process.modMem(req.body);
        if (result != 0) {
            msg = "변경이 완료되었습니다.";
            url = "/admin/mng_mem"
            res.send(service.sendMsg.msg(msg, url))
        } else {
            res.send(`
            <script>
                alert('문제발생');
                window.history.go(-1);;
            </script>
        `)
        }
    }
}
const test = {
    prodTest : async (req, res) => {
        console.log("fetch실행")
        console.log(req.query.page)
        const totalContent = await service.process.getProdTotalContent();
        const content = await service.process.getProdContent(totalContent, req.query.page);
        console.log(totalContent)
        res.json({
            total : totalContent.rows[0],
            page : content.page,
            pageContent : content.pageContent.rows
        })
    }

}

module.exports = {
    admin_view,
    admin_process,
    test
}