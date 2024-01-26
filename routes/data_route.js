const express= require("express");
const app = express();
//import controllers
const {getData} = require("../controllers/dataControll.js")
app.get("/data",getData)
module.exports=app