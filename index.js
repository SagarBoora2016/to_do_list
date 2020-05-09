
const express = require("express");
const app = express();
const port = 8000;
app.use(express.urlencoded());
const db= require("./config/mongoose");
const Task = require("./models/task");

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
    Task.find({},function(err,tasks){
        if(err){
            console.log("Unable to fetch Data");
            return;
        }
        return res.render("home",{
           tasks_list:tasks 
        });
    });
    // return res.render("home");
});
app.post("/getInDatabase",function(req,res){
    // console.log(req.body);
    // console.log(req.body.description);
    // console.log(req.body.date);
    
    Task.create({
        description:req.body.description,
        type_of_work:req.body.work,
        date_of_work:req.body.date

    },function(err,newData){
        if(err){
            console.log(err);
            return;
        }
        // console.log("New Data");
        return res.redirect("/");
    });
    // return res.redirect("/");
});