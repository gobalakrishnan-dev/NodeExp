const {MongoClient}=require("mongodb")
const path="mongodb://127.0.0.1:27017/"
const dbname="employee"
const colname="sdetails"
try{
    const client=new MongoClient(path)
    client.connect() //connection with mongodb and node
    console.log("connection successfull")
    const inp={sno:4,sname:'Shiva',mark:77,result:"pass"}
    client.db(dbname).collection(colname).insertOne(inp)
    console.log("successfully inserted boss")
}
catch{
    console.log("Error!!!!!!!!!!")
}