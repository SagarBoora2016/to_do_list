
const express = require("express");
const app = express();
const port = 8000;

app.use(express.urlencoded());
const db= require("./config/mongoose");
app.set("view engine","ejs");
app.set("views","views");
app.use(express.static("assets"));
app.listen(port,function(err){
    if(err){
        console.log("Error in launching Server.");
        return;
    }
    console.log("Server Launched.");
});

app.get("/",function(req,res){
    res.render("home");
});
app.get("/getInDatabase",function(req,res){
    console.log("Done");
    
    return res.redirect("/");
});