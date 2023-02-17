
const express=require("express")
const path = require("path")
const app=express()
const http=require("http").Server(app)



const io=require("socket.io")(http)

io.on("connection",()=>{
console.log("A User is Connected")

socket.on("disconnect",()=>{
    console.log("A User is Disconnected");
})
socket.on("message",msg=>{
    console.log("Message From User "+msg)
})

})

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname, "../src/index.html"))
})

http.listen(3000,()=>{
    console.log("Server is running on port 3000");
});

