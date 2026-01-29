const {MongoClient}=require("mongodb")
const path="mongodb://127.0.0.1:27017/"
const dbname="employee"
const colname="sdetails"
try{
    const client=new MongoClient(path)
    client.connect() //connection with mongodb and node
    console.log("connection successfull")
    const inp={mark:{$lt:70}}
    const dataset=client.db(dbname).collection(colname).deleteMany(inp)
    dataset.then((result)=>{
        console.log("successfullt deleted",result)
    })

}
catch{
    console.log("errorr")
}