const express = require("express");

const session = require("express-session");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");


const app = express();

app.use("/static", express.static("./resources"));

//app.use(express.static("resource"))

/*
const bodyParser=require("body-parser")
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
*/

app.get("/", function(req, res){
    res.render("upload.ejs")
})

const router = require("./router") (app);

app.use("/", router);

app.set("views", "./src/views");
app.set("view engine", "ejs");

app.listen(3000, () => console.log("3000 서버 구동!"));

app.use( bodyParser.urlencoded() );
app.use( bodyParser.json() );
app.use( cookieParser() );

//const router = require("./router")(app);
//app.use("/", router);



app.set("views","./src/views");
app.set("view engine","ejs");

app.listen(3000,()=>{ console.log("3000 port server"); });

