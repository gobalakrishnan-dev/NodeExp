var http=require("http")
console.log("module ok")
http.createServer((req,res)=>{
res.end("Welcome to http Server")
}).listen(9770)
console.log("Port Listening..9770")