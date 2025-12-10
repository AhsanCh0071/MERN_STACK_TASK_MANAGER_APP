const express = require('express')
const router = express.Router()

//reqiring functions from controller
const {createTask,getTask,updateTask,toggleComplete,deleteTask} = require('../controllers/TaskController')


//route creation
router.post('/',createTask)
router.get('/',getTask)
router.put('/:id',updateTask)
router.patch('/:id',toggleComplete)
router.delete('/:id',deleteTask)


module.exports= router

