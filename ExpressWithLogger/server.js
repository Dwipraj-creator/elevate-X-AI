const express = require("express");
const logger = require("./middleware/logger");
const students = require("./db/data");
const PORT = 3000
const app = express()


app.use(express.json())

app.use(logger)

// home route
app.get("/",(req,res)=>{
     res.status(200).json({msg:"Welcome to Student Portal"})
})

// about route

app.get("/about",(req,res)=>{
     res.status(200).json({msg:"This portal is used to manage student data"})
})

// student routes

app.get("/students",(req,res)=>{
    const student = students
    if(!student){
       return  res.status(404).json({msg:"No student data found"})
    }
    res.status(200).json(student)
})

// single student route

app.get("/students/:id",(req,res)=>{
    const id = Number(req.params.id)
    const match = students.find((e)=>e.id===id)

    if(!match){
       return res.status(404).json({msg:"Student not found"})
    }
    res.status(200).json(match)
})

//login route
app.post("/login",(req,res)=>{
    res.status(200).json({msg:"Login route called"})
})

app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`)
})