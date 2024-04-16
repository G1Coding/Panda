const con = require("./common_dao")
let totalCount;

getBoard = {
  getFirstBoard: async () => {
    const sql = `select * from (select * from user_board order by board_num DESC) where ROWNUM <= 30`;
    const totalCountSql = `select count(*) from user_board`;
    const result = await (await con).execute(sql);
    totalCount = await (await con).execute(totalCountSql);
    totalCount = totalCount.rows[0]['COUNT(*)'];
   
    return result;
  },
  getNBoard: async (count) => {

    let sql = `select * from (select rownum rn, A.* from (select * from user_board order by board_num desc)A)where rn between '${count * 30 + 1}' and '${count * 30 + 30}'`;
    result = await (await con).execute(sql);
    if(result.rows.length == 0)
      return 0;
    return result;
  }
}


module.exports = {
  getBoard
};