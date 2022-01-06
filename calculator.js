// jshint esversion:6

const express= require("express");
const app=express();
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extend : true}));
app.get("/",function(req,res){
  res.sendFile(__dirname + "/index.html");
});
app.post("/",function(req,res){
  var num1=Number(req.body.num1);
  var num2=Number(req.body.num2);
  var result=num1+num2 ;
  res.send("the result of this calculation is : " +result);
});


app.get("/bmiCalculator",function(req,res){
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator",function(req,res){
  var height=parseFloat(req.body.height);
  var weight=parseFloat(req.body.weight);
  var bmi=(weight/(height*height));
  res.send("Your BMI index is : "+bmi);
});

app.listen("3000",function(){
  console.log("server is at port 3000");
});
