// here we only write logic not run function

const mongoose=require("mongoose")
// mongoose pakage  use to connect your web server with db (like mongodb)

async function connectDB(){

   await mongoose.connect("mongodb+srv://harshit_agrawal:1Gp11sAOytZm4gOb@backened.3mqwbf9.mongodb.net/mannaDB")
   //this is a uri of cluster it connect server to db 
   //mongoose.connect is a special  fun( ) it create a db named mannadb and connect to it 
   console.log("DB connected    hryyyyyyyy...!")
}

module.exports= connectDB;
