const { query } = require('express');
const service = require('../../service/info/info_service');
const common = require('../../service/ser_common');
const config= require("../../../config/cookie/config")

const cookieConfig=config.cookieConfig

const info_views = {
  list: async (req, res) => {
    const list = await service.getList();
    console.log('list : ', list);
    res.render('info/list', { list });
  },
  /*
  delList : async (req, res)=>{
    const delList= await service.getDel();
    console.log("dellist : ", delList)
    res.render("info/delList",{delList})
  },
  */
  starList: async (req, res) => {
    const starList = await service.getStarList();
    console.log('starList : ', starList);
    res.render('info/starList', { starList });
  },
  profile: async (req, res) => {
    const userId= req.cookies.user_id
    const profile = await service.infoRead.getProfile(userId);
    //console.log('profile : ', userId);

    res.render('info/profile', { profile});//ratingInfo
  },
  productM: async (req, res) => {
    const userId= req.cookies.user_id
    const profile = await service.infoRead.getProfile(userId);
    console.log("prodcutM ctrlcookie : ", userId)
    res.render('info/productM', { profile,userId});
  },
  history: async (req, res) => {
    const userId= req.cookies.user_id
    const profile = await service.infoRead.getProfile(userId);
    res.render('info/history', { profile ,userId});
  },
  inquiry: async (req, res) => {
    const userId= req.cookies.user_id
    const profile = await service.infoRead.getProfile(userId);
    res.render('info/inquiry', { profile ,userId});
  },
  upload: (req, res) => {
    res.render('info/upload');
  },
  inquiryForm: (req, res) => {
    res.render('info/inquiry_form');
  },
  modifyForm: async (req, res) => {
    const userId= req.cookies.user_id
   // const profile = await service.infoRead.getProfile(req.query);//query, params?
    const profile = await service.infoRead.getProfile(userId);//query, params?
    res.render('info/infoModify_form', { profile,userId }); //{}데이터 전송
  },
  registerForm: (req, res) => {
    res.render('info/register_form');
  },
  memberView: async (req, res) => {
    console.log("con query",req.query.id);
    let member = await service.infoRead.getMember(req.query.id); // id?
    res.render('info/member_view', { member });
  },
  starForm: (req, res) => {
    res.render('info/star_form');
  },
};

const info_process = {
  /*
  modify: (req, res) => {
    if (!req.file) {
      return res.status(400).send('파일 업로드하세요');
    }
    const uploadFile = req.file;
    res.status(200).send('성공적 업로드');
  },
  */
 
  modify: async (req, res) => {
    console.log(req.body);
    const deleteFile= req.body.image_file_name;//info_img?
    console.log(req.body.image_file_name)//info_img?
    const message= await service.infoUpdate.modify(req.body,req.file);
    if(req.file !== undefined && message.result===1){
        this.file_process.delete(deleteFile)
    }
    res.send(message.msg);
  },
  delete : async (req, res)=>{
    console.log("ctrl query : ", req.query)
    const message = await service.infoUpdate.delete(req.query);
    res.send(message.msg)
    //res.redirect("/info/productM")//나중에 로그인창이나 회원가입창으로
  },
  register: async (req, res) => {
    console.log(req.body);
    let msg = await service.infoInsert.insert(req.body);
    res.send(msg);
  },
  star : async(req, res)=>{
    let msg= await service.infoInsert.starInsert(req.body)
    res.send(msg)
  },
    /*
 modify :async(req, res)=>{
    console.log("modify확인")
    console.log("con", req.params);
    let msg= await service.infoUpdate.modify(req.body)
    res.send(msg)
 },
*/
  
  inquiryF: async (req, res) => {
    const msg = await service.infoInsert.inquiryF(
      req.body,
      req.file,
      req.fileValidation
    );
    res.send(msg);
  },
  
};

const fs = require('fs');
file_process = {
  delete: (imgName) => {
    if (imgName !== 'nan') {
      try {
        fs.unlinkSync(`./upload_file/${imgName}`);
      } catch (err) {
        console.log(err);
      }
    }
  },

  download: (req, res) => {
    const filePath = `./upload_file/${req.params.imgName}`;
    res.download(filePath);
  },
};
/*
const ratingInfo = async(req, res)=>{
    let getRatingInfo = await service.getRatingInfo()
    console.log("getratinginfo : ", getRatingInfo)
    res.render("info/profile",{getRatingInfo})
}
*/
module.exports = { info_views, info_process, file_process };
