const service = require("../../service/board/board_service");

const board_views = {
    board : (req, res) => {
        res.render("data");
    }

}

module.exports = {board_views};