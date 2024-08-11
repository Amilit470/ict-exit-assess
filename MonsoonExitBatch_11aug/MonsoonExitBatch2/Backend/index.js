// import express
var express=require("express")
var cors = require("cors")
require("./connection")
var empModel=require("./model")
// initialize
var app=express()

//midd
app.use(express.json());
app.use(cors());

//api
//add employee
app.post("/add",async(req,res)=>{
    try{
        await empModel(req.body).save();
        res.send({message:"data added!!"});
    }catch(error){
        console.log(error)
    }
});
// api view
app.get("/view",async(req,res)=>{
    try {
       var data= await empModel.find()
       res.send(data)
    }catch(error){
        console.log(error)
    }
});
//delete
app.delete("/remove/:id",async (req,res)=>{
    try{
        await empModel.findByIdAndDelete(req.params.id)
        res.send({message:"deleted successfully!!!"})
    }catch(error){
        console.log(error)
    
    }
});
//UPDATE
app.put("/edit/:id",async (req,res)=>{
    try{
        await empModel.findByIdAndUpdate(req.params.id,req.body)
        res.send({message:"updated successfully!!!"})
    }catch(error){
        console.log(error)
    }
})

//port assigning
app.listen(3001,(req,res)=>{
    console.log("port is up and running")
})
