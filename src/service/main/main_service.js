const dao = require("../../database/main/mainDAO");

getBoard = {
  getFirstBoard: async () => {
    let result = await dao.getBoard.getFirstBoard();
    result = modifyData.modifyPrice(result);
    return result;
  },
  getNBoard: async (count) => {
    const result = await dao.getBoard.getNBoard(count);

    return result;
  }
}

modifyData = {
  modifyPrice: async (list) => {

    let temp = '';
    for (let i = 0; i < list.rows.length; i++) {
      temp = list.rows[i].BOARD_PRICE;
      list.rows[i].BOARD_PRICE = temp.toString()
        .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");

      let start = new Date();
      let diff = start - list.rows[i].BOARD_CREATETIME;
      
      let seconds = Math.floor((diff / 1000) % 60);
      diff = diff / 1000;
      let minutes = Math.floor((diff / 60) % 60);
      diff = diff / 60;
      let hours = Math.floor((diff / 60) % 24);
      diff = diff / 60;
      let days = Math.floor(diff / 24) - 730484;

      if(days == 0)
        list.rows[i].BOARD_CREATETIME = '오늘';
      else
        list.rows[i].BOARD_CREATETIME = days;
    }

    return list;
  }


}

module.exports = {
  getBoard
};