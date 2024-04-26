// db에서 값 가져오는 부분

const user_board = [
    {num: "1", id: "지원", title: "MLB 신발", price: "35000", img: "sdkf", 
condition: "많음", pollution: "10곳 이상", direct: "불가능", delivery: "가능", isTrading: "1", 
views: "30", area: "아산시", area_detail: "탕정역 1번 출구", createTime: "1시", category: "옷", userText: "안녕하세유"},
{num: "2", id: "지", title: "ML 발", price: "35000", img: "sdkf", 
condition: "약간 있음", pollution: "2곳 이상", direct: "가능", delivery: "불가능", isTrading: "1", 
views: "30", area: "아산시", area_detail: "탕정역 1번 출구", createTime: "1시", category: "옷", userText: "방가워유"},
{num: "3", id: "원", title: "MB 신", price: "35000", img: "sdkf", 
condition: "거의 없음", pollution: "없음", direct: "가능", delivery: "가능", isTrading: "1", 
views: "30", area: "아산시", area_detail: "탕정역 1번 출구", createTime: "1시", category: "옷", userText: "다시만나유"}
];


// function saveToDatabase(data) {
//     // 여기서 데이터를 콘솔에 출력합니다.
//     console.log("Data saved to database:", data);
// }

module.exports = {user_board, };

function findDataByNum(num) {
    return user_board.find(item => item.num === num);
}

module.exports = { findDataByNum };


module.exports = {user_board, findDataByNum };
