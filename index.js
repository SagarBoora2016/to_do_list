
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
});
app.post("/getInDatabase",function(req,res){
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

app.get("/delete-task",function(req,res){
    console.log("Deleted");
    var query = req.query;
    for( i in query){
        Task.deleteOne({_id:i},function(err){
            if(err){
                console.log("Error in deleting from database.");
                return;
            }else{

            }
        });
        console.log(i);
    }
    return res.redirect("/");
});