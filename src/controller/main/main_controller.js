
const service = require("../../service/main/main_service");

let count = 1;

const view = {
  getMain : async(req, res) => {
    const board = await getDB.getFirstBoard();

    res.render("main/main", { list : board});

  },
  getMain_board : async(req, res) => {
    const board = await getDB.getNBoard(count);
    count++;
    console.log("board :", count);
    if(board != 0)
      res.json({list : board});
  }
}

const getDB ={
   getFirstBoard : async () => {
     const result = await service.getBoard.getFirstBoard();
    
     return result.rows;
  },
  getNBoard : async ( count ) => {
    const result = await service.getBoard.getNBoard( count );

    return result.rows;
  }
}

module.exports = { view, getDB };

