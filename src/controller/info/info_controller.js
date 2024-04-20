const service = require('../../service/info/info_service');
const common = require('../../service/ser_common');

const info_views = {
  list: async (req, res) => {
    const list = await service.getList();
    console.log('list : ', list);
    res.render('info/list', { list });
  },
  starList: async (req, res) => {
    const starList = await service.getStarList();
    console.log('starList : ', starList);
    res.render('info/starList', { starList });
  },
  profile: async (req, res) => {
    const profile = await service.infoRead.getProfile();
    console.log('profile : ', profile);
    res.render('info/profile', { profile, ratingInfo });
  },
  productM: async (req, res) => {
    const profile = await service.infoRead.getProfile();
    res.render('info/productM', { profile });
  },
  history: async (req, res) => {
    const profile = await service.infoRead.getProfile();
    res.render('info/history', { profile });
  },
  inquiry: async (req, res) => {
    const profile = await service.infoRead.getProfile();
    res.render('info/inquiry', { profile });
  },
  upload: (req, res) => {
    res.render('info/upload');
  },
  inquiryForm: (req, res) => {
    res.render('info/inquiry_form');
  },
  modifyForm: async (req, res) => {
    const profile = await service.infoRead.getProfile(req.query);//query, params?
    res.render('info/infoModify_form', { profile }); //{}데이터 전송
  },
  registerForm: (req, res) => {
    res.render('info/register_form');
  },
  memberView: async (req, res) => {
    console.log(req.params);
    let member = await service.infoRead.getMember(req.params);
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
 /*
  modify: async (req, res) => {
    console.log(req.body);
    const deleteFile= req.body.info_img
    const message= await service.infoUpdate.modify(req.body,req.file);
    if(req.file !== undefined && message.result===1){
        this.file_process.delete(deleteFile)
    }
    res.send(message.msg);
  },
  */
 modify :async(req, res)=>{
    console.log("modify확인")
    let msg= await service.infoUpdate.modify(req.body)
    res.send(msg)
 },

  /*
  inquiryF: (req, res) => {
    const msg = service.infoInsert.inquiryF(
      req.body,
      req.file,
      req.fileValidation
    );
    res.send(msg);
  },
  */
  register: async (req, res) => {
    console.log(req.body);
    let msg = await service.infoInsert.insert(req.body);
    res.send(msg);
  },
  star : async(req, res)=>{
    let msg= await service.infoInsert.starInsert(req.body)
    res.send(msg)
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
