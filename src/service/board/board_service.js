const boardDao = require("../../database/board/board_dao");

// 배열로 한 번에 담아오기
const index = () => {
    console.log("=================service 연동 확인(INDEX)=================");
    console.log(boardDao);
    return boardDao;
}


// db와 일치하는 게시판 정보(num)가 같을 때 그 값을 ctrl로 넘겨줌
const info = (num) => {
    const searchNum = boardDao.find(item => item.num === num);

    
    const searchNum = boardDao.findDataByNum(num);
    console.log("~~~~~~~~~~~~~~~service 연동!! (해당하는 NUM 찾기)~~~~~~~~~~~~~~~")
    console.log(searchNum);
    return searchNum;
};



function saveData(data) {
    const formattedData = {
        id: data[0],
        quantity: data[1],
        category: data[2],
        item: data[3],
        type: data[4],
        imagePath: data[5],
        // Add more fields as needed
    };
    console.log("service에서 가공 후 데이터" , formattedData);
    boardDao.saveToDatabase(formattedData);
}

// const addData = async (data) => {
//     try {
//         return await boardDao.addData(data);
//     }catch (error) {
//         throw new Error(error.message);
//     }
// }
module.exports = { info, index, };