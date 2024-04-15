const express = require("express");

const app = express();

app.use("/static", express.static("./resources/upload"));
//app.use(express.static("resource"))

app.get("/", function(req, res){
    res.render("upload.ejs")
})

const router = require("./router") (app);

app.use("/", router);

app.set("views", "./src/views");
app.set("view engine", "ejs");

app.listen(3000, () => console.log("3000 서버 구동!"));