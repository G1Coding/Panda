const service = require("../../service/info/info_service");

const info_views = {
    profile : (req, res) => {
        res.render("info/profile");
    },
    productM :(req,res)=>{
        res.render("info/productM")
    },
    history :(req, res)=>{
        res.render("info/history")
    },
    comment : (req, res)=>{
        res.render("info/comment")
    },
    upload : (req, res)=>{
        res.render("info/upload")
    }

}
const info_process={
    modify : (req, res)=>{
   
    }
}

module.exports = {info_views,info_process};