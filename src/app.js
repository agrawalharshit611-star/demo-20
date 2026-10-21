const express=require('express')

const noteModel=require('./models/note.model')

const app=express();

app.use(express.json())
//middleware to read data by server in req.body


app.post("/notes",async (req,res)=>{
    const data=req.body

    await noteModel.create(
        {
            title:data.title,
            description:data.description,
            id:data.id
        }
    )
    //here a noteModel create a mnote in db amnd saved it 

    res.status(201).json(
        {
            message:"note created succesfully",
            "note":data
        }
    )

})

app.get("/notes",async(req,res)=>{

  const notes=await noteModel.find();
  // return array of  notes[] or []

  res.status(200).json({
    message:"notes fetch successfully...",
    notes:notes
  })
 

})



app.get("/notes/:id",async(req,res)=>{

    const id=req.params.id
 
   const note= await noteModel.findOne({id:id}) //retrun an single object or null

   res.status(200).json({
    note:note
   })

})

app.patch("/notes/:id",async (req,res)=>{

    const id=req.params.id
    const updatedTitle=req.body.title

    const updatedNote= await noteModel.findOneAndUpdate({id:id},
        {title:updatedTitle}
    )
    //in 1st object find one over a property and followed by updated properties 
    res.status(344).json({
        message:"note update successfully...",
        note:updatedNote
    })


    
})

app.delete("/notes/:id",async(req,res)=>{
    const id=req.params.id
   const a= await noteModel.findOneAndDelete({id:id})

   if(!a)
   {
     return res.status(404).json({
        message:"note not found  ..."
    })
   }
   res.status(200).json({
        message:"note deleted successfully..."
    })
   


})


module.exports=app;