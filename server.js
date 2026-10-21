const app= require("./src/app")
const connectDB=require("./src/db/db")




connectDB()
//mongodb connect here

app.listen(4000,()=>{
    console.log("server start succesfully...")
})