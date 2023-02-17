const express=require("express")

const app=express()
const cron=require("node-cron")

app.get("/",(req,res)=>{
    res.send("Hello World")
    let task=cron.schedule("* * * * * */5",()=>{
        console.log("Task Completed");
    })
    setTimeout(()=>{
        task.stop()
    },3000)
  
})


app.listen(3000,()=>{
    console.log("Server is running on port 3000");
 
})