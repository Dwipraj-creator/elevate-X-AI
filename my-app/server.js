const express = require("express");
 const app = express()

 app.use(express.json());

 app.get("/",(req,res)=>{
    res.send("API Running")
 })

let tasks = [
  { id: 1, title: "Revise Node.js", completed: false },
  { id: 2, title: "Practice Express routes", completed: true }
];


app.get("/tasks",(req,res)=>{
    res.json(tasks)
})

app.get("/tasks/:id",(req,res)=>{
    const id = Number(req.params.id);
    const task = tasks.find((e)=>e.id === id);
    if(!task){
        return res.status(404).json({
            error:"Task not found"
        })     
    }
    res.json(task)
})

app.post("/tasks",(req,res)=>{
    const {title} = req.body;

    if(!title)  {
        return res.status(400).json({
            error:"Title is needed"
        })
    }
    const newTask = {
        id:tasks.length + 1,
        title,
        completed:false,
    };
    tasks.push(newTask);
    res.status(201).json(newTask)
})

app.delete("/tasks/:id",(req,res)=>{
    const id=  Number(req.params.id);
    const taskIndex = tasks.findIndex((e)=> e.id === id)
    if(taskIndex === -1){
        return res.status(404).json({
            error:"Task not found"
        })
    }
    const deleteTask = tasks.splice(taskIndex,1);
    res.json(deleteTask[0])
})

 app.listen(3000,()=>{
    console.log("server is running on http://localhost:3000")
 })