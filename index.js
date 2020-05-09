
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
app.get("/getInDatabase",function(req,res){
    console.log("Done");
    Task.create({
        description:"Sagar",
        type_of_work:"Sagar",
        date_of_work:"Sahar"

    },function(err,newData){
        if(err){
            console.log("error");
            return;
        }
        console.log("New Data");
        res.redirect("/");
    });
    return res.redirect("/");
});