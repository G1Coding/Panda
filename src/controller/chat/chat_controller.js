const service = require("../../service/chat/chat_service")
const cookieConfig = require("../../../config/cookie_session/config")

const chat_view = {
    index : (req, res) => {
        const user = service.getUser();
        res.render("chat/chat_index", { cookie : req.cookies.chatID, user })
    },
    chatLoginForm : (req, res) => {
        res.render("chat/chat_login_form")
    },
    info : (req, res) => {
        console.log("req.params.num : ", req.params.num)
        console.log("req.cookies.id : ", req.params.id)
        res.render("chat/chat_form", {
            cookie : req.cookies.user_id,
            num : req.params.num,
            recId : req.params.id,
        })
    }
}
const chat_process = {
    loginChk : (req, res) => {
        console.log("body : ", req.body)
        const result = service.process.loginChk(req.body);
        if (result.length != 0) {
            res.cookie("chatID", req.body.id, cookieConfig )
            res.cookie("chatPW", req.body.pwd, cookieConfig)
            res.cookie("isLogin", "true", cookieConfig)
            res.cookie("isAdmin", result[0].admin, cookieConfig)
            msg = "로그인 성공 하였습니다."
            url = "/chat"
        } else {
            msg = "아이디 확인 필요",
            url = "/chat/login_form"
        }
        res.send (service.getMessage(msg, url))
    },
    logout : (req, res) => {
        res.clearCookie("chatID")
        res.clearCookie("chatPW")
        res.clearCookie("isLogin")
        res.clearCookie("isAdmin")
        res.send(service.getMessage("로그아웃되었습니다.", "/chat"))
    }
}






module.exports = {
    chat_view,
    chat_process,
}