const mongoose = require('mongoose');
const {ToDo} = require('../../model/database');
const url = 'mongodb://127.0.0.1/playground';

const connection = async () => await mongoose.connect(url);
connection();

const addTask = async (req, res) => {
     const {task} = req.body
     const toDo = new ToDo({task});
     const result = await toDo.save();
     res.json({message: 'task has been added'})
 }
 const done = async (req, res) => {
    const {id} = req.params
    const taskDone = await ToDo
    .updateOne({_id: id},{$set:{__v: 1}})
   
   res.json({message: 'done'})
 }
 const undone = async (req, res) => {
   const {id} = req.params
    const taskUndone = await ToDo
    .updateOne({_id: id},{$set: {__v: 0}})
    res.json({message: 'undone'})
 }
 const getAllTasks = async (req, res) => {
    const  getTasks =  await ToDo
    .find()
    .limit(10)
    res.json(getTasks)
}
const deleteTask = async (req, res) => {

const {id} = req.params;
const task = await ToDo
.deleteOne({_id: id});
res.json({message: 'TaskDeleted'});

}

 module.exports = {
  addTask, 
  getAllTasks, 
  done, 
  undone, 
  deleteTask}