const Task = require('../models/Task')

// create-task
exports.createTask = async (req,res) =>{

    try{

        const task = await Task.create({text : req.body.text})
        res.status(201).json(task)

    }catch(error){

        res.status(500).json({error:"Error Creating the task"})

    }
}

//get-tasks
exports.getTask = async (req,res) => {

    try{

        const tasks = await Task.find()
        res.json(tasks)

    }catch(error){

        res.status(500).json({error:"Error Fetching the task"})

    }
}

//update-task
exports.updateTask = async (req,res)=>{
    
    try{

        const updatedTask = await Task.findByIdAndUpdate(
            req.params.id,
            {text : req.body.text},
            {new : true}
        )
        res.json(updatedTask)

    }catch(error){

    res.status(500).json({error:"Error Updating the task"})

    }
}

//toggle-complete
exports.toggleComplete = async (req,res)=>{

    try{

        const task = await Task.findById(req.params.id)
        task.completed = !task.completed
        await task.save()
        res.json(task)

    }catch(error){

    res.status(500).json({error:"Error toggling the task"})

    }
}

//delete-task
exports.deleteTask = async (req,res)=>{

    try{

        await Task.findByIdAndDelete(
            req.params.id
        )
        res.json({message : 'Deleted Successfully'})

    }catch(error){
        
    res.status(500).json({error:"Error deleting the task"})

    }
}