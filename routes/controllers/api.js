
const mongoose = require('mongoose');
const {ToDoList} = require('../../model/database');
const url = 'mongodb://127.0.0.1/playground';
const addTask = async (req, res) => {
const connection = await mongoose.connect(url);
     const {task} = req.body
         const toDo = new ToDoList({
         task: task,
     });
     const result = await toDo.save();
     res.status(200).json({message: 'task has been added'})
 }
 const done = async (req, res) => {
    const {id} = req.params
    const connection = await mongoose.connect(url);
    const result = await ToDoList.updateOne({_id: id},{$set:{__v: 1}})
    console.log(result)
   res.status(200).json({message: 'updated'})
 }
 const undone = async (req, res) => {
   const {id} = req.params
    const connection = await mongoose.connect(url);
    const result = await ToDoList.find({_id:id}).updateOne({_id: id},{$set: {__v: 0}})
   res.status(200).json({message: 'updated'})
 }
 const getAllTasks = async (req, res) => {
    const connection = await mongoose.connect(url);
    const  getTasks =  await ToDoList.find().limit(15)
    res.json(getTasks)
}

 module.exports = {addTask, getAllTasks, done, undone}