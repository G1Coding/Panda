const con = require("../main/common_dao");

getBuyerPage = {
  getBuyerPage : async (board_num) => {
    const sql = `select * from user_board where board_num = ${board_num}`;
    let result = await (await con).execute(sql);

    const sql_name = `select info_name, info_phone from user_info where info_id = '${result.rows[0].BOARD_ID}'`;
    let result_name = await (await con).execute(sql_name);


    result.rows[1] = result_name.rows[0];

    return result;
  }
}

module.exports = { getBuyerPage };