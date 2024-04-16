const service = require('../../service/info/info_service');

const info_views = {
  profile: (req, res) => {
    res.render('info/profile');
  },
  productM: (req, res) => {
    res.render('info/productM');
  },
  history: (req, res) => {
    res.render('info/history');
  },
  inquiry: (req, res) => {
    res.render('info/inquiry');
  },
  upload: (req, res) => {
    res.render('info/upload');
  },
  inquiryForm: (req, res) => {
    res.render('info/inquiry_form');
  },

};
const info_process = {
  modify: (req, res) => {
    if (!req.file) {
      return res.status(400).send('파일 업로드하세요');
    }
    const uploadFile = req.file;
    res.status(200).send('성공적 업로드');
  },
  inquiryF :(req, res)=>{
    const msg= service.infoInsert.inquiryF(
        req.body, req.file, req.fileValidation
    )
    res.send(msg)
  },
  infoModifyForm : (req, res)=>{
    res.render("info/infoModify_form")
  }
};

module.exports = { info_views, info_process };
