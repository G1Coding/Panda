const service = require("../../service/board/board_service");


const index = (req, res) => {
    const member = service.index(); //service에서의 리턴값이 들어옴,.
    console.log("=================controller 연동 확인(INDEX)=================");
    console.log(member);
    
    res.render("board/test", {member: member}); //key와 value가 동일하면 member 로만 써도 됨 - member.X, member[0]이런 식으로 접근 가능
}

const submitForm = (req, res) => {
    console.log(req.body);
    console.log("submitForm Controller 확인");
    console.log("data만 받아오기" , req.body);

    const data = req.body.data;

    const formDataValues = saveFormData(data);
    console.log("값만 저장하는 거" , formDataValues);

    const data2 = JSON.parse(req.body.data);
    console.log("키:값으로 들어오는 것" , data2);


    // service.saveFormData(data);
    res.send('Data received and processed successfully!');
}


function saveFormData(formData) {
    const data = JSON.parse(formData);
    const valuesArray = Object.values(data);
    return valuesArray;
}


const board_views = {
    header : (req, res) => {
        res.render("common/header")
    },

    // 게시판 번호(num)에 해당하는 product.ejs로 넘겨줌
    product : (req, res) => {
        const num = req.query.num;
        
        console.log("사용자로부터 얻은 게시글 번호 (num ) = " + num);

      
        const productInfo = service.info(num);    


        console.log("~~~~~~~~~~~~~~~controller 연동!! (해당하는 NUM 찾기)~~~~~~~~~~~~~~~")
        console.log(productInfo);

    res.render("board/product", {member: productInfo});
    }
}




const board_write = {

productForm : (req, res) => {
    res.render("board/forms");
},


}
module.exports = { submitForm, index, board_views, board_write};