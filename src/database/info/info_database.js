//const con =require("../common_dao")

const oracledb = require('oracledb');
const dbConfig = require('../../../config/database/db_config');
const { query } = require('express');
//const { realpathSync } = require('fs');
oracledb.autoCommit = true;
oracledb.outFormat = oracledb.OBJECT;

const infoInsert = {
  insert: async (body) => {
    let con = await oracledb.getConnection(dbConfig);
    const sql = `insert into user_info(info_id, info_pw, info_name, info_region,
         info_img, info_phone, info_admin, info_point)
         values(:info_id, :info_pw, :info_name, :info_region,
            :info_img, :info_phone, :info_admin, :info_point)`;

    let result = 0;
    try {
      result = await con.execute(sql, body);
      console.log('dao result : ', result);
    } catch (err) {
      console.log(err);
    }
    return result;
  },
  starInsert: async (body) => {
    let con = await oracledb.getConnection(dbConfig);
    const sql = `insert into user_rating(rating_id, rating_count, rating_grade)
         values(:rating_id, :rating_count, :rating_grade)`;

    let result = 0;
    try {
      result = await con.execute(sql, body);
      console.log('dao result : ', result);
    } catch (err) {
      console.log(err);
    }
    return result;
  },
  //inquiryF
  /*
  write: async (body) => {
    let con = await oracledb.getConnection(dbConfig);
    const sql = `insert into user_board(board_num, board_title, board_createTime)
        values(:board_num, :board_title, :board_createTime)`;
    let result = 0;
    try{
      result =await con.execute(sql, body)
    }catch(err){
      console.log(err)
    }
  },
  */
};

const infoUpdate = {
  modify: async (body) => {
    let con = await oracledb.getConnection(dbConfig);
    const sql = `update user_info set info_name=:info_name, info_pw=:info_pw, info_region=:info_region,
            info_phone=:info_phone, info_img=:info_img where info_id=:info_id`;
    let result;
    console.log('bbbb', body);
    try {
      result = await (
        await con
      ).execute(sql, {
        info_name: body.name,
        info_pw: body.pw,
        info_region: body.addr,
        info_phone: body.phone,
        info_img: body.image_file_name,
        info_id: body.id,
      }); //body?
      console.log('dao result : ', result);
    } catch (err) {
      console.log(err);
    }
    return result;
  },
  delete: async (query) => {
    let result;
    try {
      let con = await oracledb.getConnection(dbConfig);
      const sql = `delete from user_info where info_id='${query.info_id}'`;
      console.log('dao cc', query);
      result = await (await con).execute(sql);
      console.log('dao delete : ', result);
    } catch (err) {
      console.log(err);
    }
    return result;
  },
  upHit: async(count, board_num)=>{
    const con= await oracledb.getConnection(dbConfig)
    const sql=`update user_board set board_views=board_views+1 where board_num='${board_num}'`
    await con.execute(sql)
  }
};

const infoRead = {
  getMember: async (query) => {
    let con = await oracledb.getConnection(dbConfig);
    const sql = `select * from user_info where info_id='${query.info_id}'`;
    let member;
    try {
      member = await con.execute(sql);
    } catch (err) {
      console.log(err);
    }
    console.log('dao : ', member);
    return member;
  },
  getProfile: async (userId) => {
    let con = await oracledb.getConnection(dbConfig);
    const sql = `select * from user_info where info_id = '${userId}'`;
    let result;
    try {
      result = await con.execute(sql);
    } catch (err) {
      console.log(err);
    }
    //let result = await con.execute('select * from user_info');
    //let result1= await con.execute('select * from user_delInfo');
    // console.log('dao : ', result);
    //return {user_info : result.rows, user_delInfo: result1.rows};
    return result;
  },
  getBoard: async (body) => {
    //userid
    let con = await oracledb.getConnection(dbConfig);
    const sql = `select * from user_board where board_id='${body}'`; //userid
    let result;
    try {
      result = await (await con).execute(sql);
    } catch (err) {
      console.log(err);
    }
    return result;
  },
  content: async (count, board_num) => {
    let con = await oracledb.getConnection(dbConfig);
    const sql = `select * from user_board where board_num='${board_num}'`;
    const data = await con.execute(sql);
    return data;
  },
};

const getList = async () => {
  let con = await oracledb.getConnection(dbConfig);
  let result = await con.execute('select * from user_info');
  //console.log('dao : ', result);
  return result;
};
const getDel = async () => {
  let con = await oracledb.getConnection(dbConfig);
  let result = await con.execute('select * from user_delInfo');
  return result;
};
const getStarList = async () => {
  let con = await oracledb.getConnection(dbConfig);
  let result = await con.execute('select * from user_rating');
  // console.log('dao : ', result);
  return result;
};
/*
  const getRatingInfo=async ()=>{
    let con= await oracledb.getConnection(dbConfig)
    let result= await con.execute("select * from user_rating")
    console.log('dao : ', result);
    return result
  }
  */
module.exports = {
  getList,
  getStarList,
  infoInsert,
  infoRead,
  infoUpdate,
  getDel,
};
