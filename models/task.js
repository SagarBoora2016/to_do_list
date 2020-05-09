const mongoose = require('mongoose');
const to_do_schema = mongoose.Schema({
    description:{
        type:String,
        required:true
    },
    type_of_work:{
        type:String,
        required:true
    },
    date_of_work:{
        type:String,
        required:true
    }
});
const Task = mongoose.model("task",to_do_schema);
console.log("Model used");
module.exports = Task;