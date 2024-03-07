const express = require("express");
const bodyParser = require("body-parser");



const app = express();
app.use(bodyParser.urlencoded({extended:true}));


app.get("/",function(req,res){

    var today = new Date();
    if(today.getDay()===6 || today.getDay() === 0){
        res.send("Yey igts the weekend");
    }else{
        res.send("Wok day...");
    }

});




app.listen(3000,function(){
    console.log("up and running at 3000");
})