const memberDAO = require('../../database/info/info_database');
const common = require('../ser_common');

const infoInsert = {
  inquiryF: (body, file, fileValidation) => {
    if (fileValidation) {
      msg = fileValidation;
      url = '/info/inquiry_form';
      return common.getMessage(msg, url);
    }
    console.log('file : ', file);
    if (file !== undefined) {
      body.origin_file_name = file.originalname;
      body.change_file_name = file.filename;
    }
    console.log('body : ', body);
    const result = dao.infoInsert.inquiryF(body);
    if (result.rowsAffected === 1) {
      msg = '등록되었습니다!';
      url = '/info/inquiry';
    } else {
      msg = '문제발생!';
      url = '/info/inquiry_form';
    }
    return common.getMessage(msg, url);
  },
  insert: async (body) => {
    const result = await memberDAO.infoInsert.insert(body);
    console.log('result : ', result);
    let msg = '',
      url = '';
    if (result == 0) {
      msg = '문제발생!!';
      url = '/info/register_form';
    } else {
      msg = '등록성공!!';
      url = '/info/list'; //profile?
    }
    return common.getMessage(msg, url);
  },
  starInsert: async (body) => {
    const result = await memberDAO.infoInsert.starInsert(body);
    console.log('result : ', result);
    let msg = '',
      url = '';
    if (result == 0) {
      msg = '문제발생!!';
      url = '/info/star_form';
    } else {
      msg = '등록성공!!';
      url = '/info/starList'; //profile?
    }
    return common.getMessage(msg, url);
  },
};

const infoUpdate = {
  /*
    modify :async (body,fileValidation)=>{
        let msg= "", url=""

        if( fileValidation ){
            msg = fileValidation;
            url = "/info/infoModify_form";
            return common.getMessage(msg, url);
        }
        console.log("body.info_img : ", body.info_img);
        if( body.info_img !== undefined ){
            body.info_img = file.info_img;
        
        }else{
            body.info_img = "nan";
        
        }
        console.log("body : ", body);

        const result= await memberDAO.infoUpdate.modify(body)
        if(result.rowsAffected===1){
            msg="수정문제발생!!";
            url="/info/modify_form/"
           // url="/info/modify_form?name="+body.name;

        }else{
            msg="수정성공!!";
            url="/info/productM/";
            //url="/info/productM/"+body.name;

        }
        return common.getMessage(msg, url)
    },
    */
  modify: async (body) => {
    console.log('m확인');
    let msg = '',
      url = '';
    try {
      let result = await memberDAO.infoUpdate.modify(body);
      if (result == 0) {
        msg = '수정문제발생!!';
        url = '/info/modify_form?info_id=' + body.info_id;
      } else {
        msg = '수정성공!!';
        url = '/info/productM/' + body.info_id;
      }
    } catch (err) {
      console.log(err);
      msg = '수정중오류!!';
      url = '/info/modify_form?info_id=' + body.info_id;
    }
    return common.getMessage(msg, url);
  },
};

const infoRead = {
  getMember: async (mId) => {
    let member = await memberDAO.infoRead.getMember(mId);
    console.log('member[0] : ', member.rows[0]);
    return member.rows[0];
  },
  getProfile: async () => {
    const result = await memberDAO.infoRead.getProfile();
    console.log('ser : ', result);
    return result.rows;
  },
};

const getList = async () => {
  const result = await memberDAO.getList();
  console.log('ser : ', result);
  return result.rows; //ctrl돌려줌
};
const getStarList = async () => {
  const result = await memberDAO.getStarList();
  console.log('ser : ', result);
  return result.rows; //ctrl돌려줌
};
/*
const getRatingInfo = async () =>{
  const result= await memberDAO.getRatingInfo()

}
*/
module.exports = { infoInsert, infoRead, infoUpdate, getList, getStarList };
