 const express= require("express")
 const dotenv= require("dotenv")
 const app=express();
dotenv.config();
 
 app.get("/",(req,res,next)=>{
    res.json({
        name:"satish mishra",
        course: "BCA",
        rollno: 25
    })
 })

 app.listen(process.env.PORT,()=>{
    console.log("hello world");
 })