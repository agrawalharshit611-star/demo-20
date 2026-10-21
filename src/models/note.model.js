const mongoose=require("mongoose");

const noteSchema=new mongoose.Schema(
    {
        title:{
            type:String,
            required:true
        },
        description:{
            type:String,
            required:true

        },
    id:Number

    }
)

const noteModel=new mongoose.model("note",noteSchema)

module.exports=noteModel