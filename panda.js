const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const app = express();

app.use( bodyParser.urlencoded(true) );

const router = require("./router") (app);

app.use("/", router);

app.use("/resources", express.static("resources")); 
app.set("views", "./src/views");
app.set("view engine", "ejs");


app.listen(3000,()=>{ console.log("3000 port server"); });

