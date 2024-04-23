const service = require("../../service/admin/admin_mem_service")

const admin_view = {
    mngMem : async (req, res) => {
        const result = await service.process.getMem()
        res.render("admin/member/admin_mng_mem", {
            result : result.rows
        })
    },
    mngMemAdd : async (req, res) => {
        res.render("admin/member/admin_mng_mem_add", {
            
        })
    },
    mngMemMod : async (req, res) => {
        const user = await service.readUser.oneUser(req.query.id)
        res.render("admin/member/admin_mng_mem_mod", {user : user.rows[0]})
    },
    mngMemIdChk : async (req, res) => {
        console.log("query.id : ", req.query.id)
        const result = await service.process.memIdChk(req.query.id)
        console.log("result : ", result)
        res.json({ result : result.rows })

    }
}

const admin_process = {
    mngMemAddChk : async(req, res) => {
        const result = await service.process.addMem(req.body)
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
        const result = await service.process.delMem(req.query.arr);
        if (result.rowsAffected != 0) {
            msg = "삭제가 완료되었습니다.";
        } else {
            msg = "문제가 발생하였습니다.";
        }
        url = "/admin/mng_mem"
        res.send(service.sendMsg.msg(msg, url))
    },
    mngMemModChk : async (req, res) => {
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
    },
}

module.exports = {
    admin_view,
    admin_process,
}