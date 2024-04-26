// db에서 값 가져오는 부분

const user_board = [
    {num: "1", id: "지원", title: "초록색 맨투맨", price: "35000", img: "1", 
condition: "많음", pollution: "10곳 이상", direct: "불가능", delivery: "가능", isTrading: "1", 
views: "30", area: "아산시", area_detail: "탕정역 1번 출구", createTime: "1시", category: "옷", userText: "판매자 한 마디"},
{num: "2", id: "지", title: "신발", price: "35000", img: "2", 
condition: "약간 있음", pollution: "2곳 이상", direct: "가능", delivery: "불가능", isTrading: "1", 
views: "30", area: "아산시", area_detail: "탕정역 1번 출구", createTime: "1시", category: "옷", userText: "판매자 한 마디"},

]
// function saveToDatabase(data) {
//     // 여기서 데이터를 콘솔에 출력합니다.
//     console.log("Data saved to database:", data);
// }


function findDataByNum(num) {
    return user_board.find(item => item.num === num);
}



module.exports = {user_board, findDataByNum };


