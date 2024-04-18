
const service = require("../../service/main/main_service");

let category = 0;

const view = {
  getMain : async(req, res) => {
    const board = await getDB.getFirstBoard();

    res.render("main/main", { list : board, category : 0});

  },
  getMain_board : async(req, res) => {
    let count = req.params.count;
    const board = await getDB.getNBoard(count);
    
    console.log("board :", count);
    if(board != 0)
      res.json({list : board});
  },
  getMain_category : async(req, res) => {
    const board = await getDB.getCategoryBoard(req.params.category_id);
    // 이미지 경로 확인해보기 ( 테스트 용 )
    if(req.params.category_id != 123)
      category = req.params.category_id;

   res.render("main/main", { list : board, category: category});
  },
  getMain_category_board : async (req, res) => {
    let count = req.params.count;
    const board = await getDB.getCategory_NBoard(category, count);

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
  },
  getCategoryBoard : async (category_id) => {
    const result = await service.getBoard.getCategoryBoard(category_id);

    return result.rows;
  },
  getCategory_NBoard : async (category, count) => {
    const result = await service.getBoard.getCategory_NBoard(category, count);


    return result.rows;
  }
}

module.exports = { view, getDB };

