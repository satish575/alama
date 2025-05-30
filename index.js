 const express= require("express")
 const app=express();

 app.get("/",(req,res,next)=>{
    res.json({
        name:"satish mishra",
        course: "BCA",
        rollno: 25
    })
 })

 app.listen(3000,()=>{
    console.log("hello world");
 })