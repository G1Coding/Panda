//const con =require("../common_dao")

const oracledb = require('oracledb');
const dbConfig = require('../../../config/database/db_config');
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
};

const infoUpdate = {
  modify: async (body) => {
    let con = await oracledb.getConnection(dbConfig);
    const sql = `update user_info set info_pw=:info_pw, info_region=:info_region,
            info_phone=:info_phone where info_id=:info_id`;
    let result = 0;
    try {
      result = (await con).execute(sql, body);//body?
    } catch (err) {
      console.log(err);
    }
    return result;
  },
};

const infoRead = {
  getMember: async (mId) => {
    let con = await oracledb.getConnection(dbConfig);
    const sql = 'select * from user_info where info_id=:id';
    let member;
    try {
      member = await con.execute(sql, mId);
    } catch (err) {
      console.log(err);
    }
    console.log('dao : ', member);
    return member;
  },
  getProfile: async () => {
    let con = await oracledb.getConnection(dbConfig);
    let result = await con.execute('select * from user_info');
    console.log('dao : ', result);
    return result;
  },
};

const getList = async () => {
  let con = await oracledb.getConnection(dbConfig);
  let result = await con.execute('select * from user_info');
  console.log('dao : ', result);
  return result;
};
const getStarList = async () => {
    let con = await oracledb.getConnection(dbConfig);
    let result = await con.execute('select * from user_rating');
    console.log('dao : ', result);
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
module.exports = { getList, getStarList, infoInsert, infoRead, infoUpdate };
