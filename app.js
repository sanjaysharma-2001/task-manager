const express = require('express');
const fsdata = require('./fsdata.json');
const Validator = require('./validator');
const fs = require('fs'); // For reading and writing files

const app = express(); // For HTTP request/response
app.use(express.json()); //Middleware- interceptor

const PORT = 7000
app.listen(PORT, (err) => {
    if(err) {
        console.log("Error ocurred cannot start the server");
    } else {
        console.log("Started the server");
    }
});

//Fetch all tasks 
app.get('/task-manager/v1/tasks', (req, res) => {
    return res.status(200).json(fsdata);
    });

//Fetch specific task by id
app.get("/task-manager/v1/tasks/:id", (req,res)=>{
    const tasks= fsdata.tasks;
    let task = tasks.filter(task => task.id == req.params.id); 

    if(!task && task.length==0){
        return res.status(404).send('The task not found in fs database.');
    }
    res.send( task );
    });

//Fetch specific task by id
app.post('/task-manager/v1/tasks', (req, res) => {
    const taskInfo = req.body;
    if(Validator.validateTaskInfo(taskInfo).status == true) {
        let fsdataModified = fsdata;
        //dynamic task id generation
        taskInfo.id=fsdata.tasks.length+1;
        fsdataModified.tasks.push(taskInfo);
        fs.writeFile('./fsdata.json', JSON.stringify(fsdataModified), {encoding: 'utf8', flag: 'w'}, (err, data) => {
            if(err) {
                return res.status(500).send("Something went wrong while updating the tasks to the file, please try recreating the task");
            } else {
                return res.status(201).send("Task has been successfuly validated and created");
            }
        });
    } else {
        return res.status(400).json(Validator.validateTaskInfo(taskInfo));
    }
})

//modify task by id
app.put("/task-manager/v1/tasks/:id", (req,res)=>{
    const tasks= fsdata.tasks;
    let task = tasks.find(task => task.id == req.params.id); 

    if(!task[0] ){
        task[0].title=req.body.title;
        task[0].description=req.body.description;
        task[0].completed=req.body.completed;
    }else{
        return res.status(404).send('The task not found in fs database.');
    }
    res.send( task );

    });
//delete task by id
app.delete("/task-manager/v1/tasks/:id", (req,res)=>{
    let fsdataModified = fsdata;
    const tasks= fsdataModified.tasks;
    let task = tasks.find(task => task.id == req.params.id);  
    
  

        const index = tasks.indexOf(task[0]); 
        tasks.splice(index,1);
    
        fs.writeFile('./fsdata.json', JSON.stringify(fsdataModified), {encoding: 'utf8', flag: 'w'}, (err, data) => {
            if(err) {
                return res.status(500).send("Something went wrong while updating the tasks to the file, please try again");
            } else {
                return res.status(201).send("Task has been successfuly deleted.");
            }
        });
    

     
    });    

