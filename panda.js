const express = require("express");

const session = require("express-session");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");


const app = express();

app.use("/static", express.static("./resources"));
//app.use(express.static("resource"))
const router = require("./router") (app);


app.use( bodyParser.urlencoded() );
app.use( bodyParser.json() );
app.use( cookieParser() );




app.use("/", router);




app.set("views","./src/views");
app.set("view engine","ejs");

app.listen(3000,()=>{ console.log("3000 port server"); });
