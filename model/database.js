
const mongoose = require('mongoose');
const toDoSechma = new mongoose.Schema({
    task: String,
    isDone: Boolean,
})
const ToDoList = mongoose.model('TODO',toDoSechma);

module.exports = {ToDoList};
















// const courseSechma = new mongoose.Schema({
//     task: String,
//     // author: String,
//     // tags: [String],
//     // date: {type: Date, default: Date.now},
//     // isPublished: Boolean
   
// })
// const Course = mongoose.model('Course', courseSechma);