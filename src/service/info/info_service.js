const memberDAO = require('../../database/info/info_database');
const common = require('../ser_common');

const infoInsert = {
  inquiryF: async (body, file, fileValidation) => {
    if (fileValidation) {
      msg = fileValidation;
      url = '/info/inquiry_form';
      return common.getMessage(msg, url);
    }
    console.log('file : ', file);
    if (file !== undefined) {
      body.origin_file_name = file.originalname;
    } else {
      body.origin_file_name = 'nan';
    }
    console.log('body : ', body);
    //const result = await memberDAO.infoInsert.inquiryF(body);
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
      msg = '문제가 발생했습니다.';
      url = '/info/register_form';
    } else {
      msg = '등록 완료되었습니다.';
      url = '/info/productM'; //profile?
    }
    return common.getMessage(msg, url);
  },
  starInsert: async (body) => {
    const result = await memberDAO.infoInsert.starInsert(body);
    console.log('result : ', result);
    let msg = '',
      url = '';
    if (result == 0) {
      msg = '문제가 발생했습니다.';
      url = '/info/star_form';
    } else {
      msg = '등록 완료되었습니다.';
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
  modify: async (body, file) => {
    //console.log("mbody", body)
    if (file !== undefined) {
      body.image_file_name = file.originalname;
    }

    console.log('m확인');
    let result = 0;
    try {
      result = await memberDAO.infoUpdate.modify(body);
    } catch (err) {
      console.log(err);
      msg = '수정중 오류가 발생했습니다.';
      url = '/info/infoModify_form?info_id=' + body.id;
    }
    let msg, url;
    let message = {};
    if (result !== 0) {
      msg = '수정 완료되었습니다.';
      url = '/info/productM/';
      // + body.id; 쓰면 페이지가 바로 넘어가지 않음
    } else {
      msg = '문제가 발생했습니다.';
      url = '/info/infoModify_form?info_id=' + body.id;
    }
    message.msg = common.getMessage(msg, url);
    return message;
  },
  delete: async (query) => {
    let result = 0;
    try {
      result = await memberDAO.infoUpdate.delete(query);

      console.log('ser result : ', result);
    } catch (err) {
      console.log(err);
      msg = '탈퇴중 오류가 발생했습니다.';
      url = `/info/infoModify_form?info_id='${query.info_id}'`;
    }
    let msg, url;
    let message = {};
    if (result !== 0) {
      msg = '탈퇴가 완료되었습니다.';
      url = '/login/'; //나중에 회원가입창으로 연결, 탈퇴되었을때 페이지수정못함
    } else {
      msg = '문제가 발생했습니다.';
      url = `/info/infoModify_form?info_id='${query.info_id}'`;
    }
    message.msg = common.getMessage(msg, url);
    return message;
  },
};

const infoRead = {
  getMember: async () => {
    let member = await memberDAO.infoRead.getMember();
    //console.log('member[0] : ', member.rows[0]);
    return member.rows;
  },
  getProfile: async (userId) => {
    const result = await memberDAO.infoRead.getProfile(userId);
    console.log('ser cookie : ', result);
    return result.rows;
  },
};

const getList = async () => {
  const result = await memberDAO.getList();
  console.log('ser : ', result);
  return result.rows; //ctrl돌려줌
};
/*
const getDel = async () => {
  const result = await memberDAO.getDel();
  return result.rows;
};
*/
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
