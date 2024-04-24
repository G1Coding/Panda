const oracledb = require('oracledb');
const dbConfig = require('../../config/database/db_config');

oracledb.autoCommit = true;
oracledb.outFormat = oracledb.OBJECT;

/*
oracledb.getConnection({
  user: dbConfig.user,
  password: dbConfig.password,
  connectString: dbConfig.connectString,
},
function(err,conn){
    if(err){throw err;}
    console.log("db 연결 성공");
    //const sql;
    //sql="insert into user_info values(:info_id, :info_pw, :info_name, :info_region, :info_img, :info_phone, :info_admin, :info_point)"
    sql="select user_id, user_name";
    conn.execute(sql,[],function(err, result){
        if(err){throw err;}
        console.log(result.rows)
        doRelease(conn)
    });
});

function doRelease(conn){
    conn.release(function(err){
        if(err){throw err;}
    });
}
*/
module.exports=oracledb.getConnection(dbConfig);