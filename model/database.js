
const mongoose = require('mongoose');

const toDoSechma = new mongoose.Schema({
    task: String,
    isDone: Boolean,
})
const ToDo = mongoose.model('TODO',toDoSechma);



const studentSchema = new mongoose.Schema({
    fName: String,
    lName: String,
    email: String,
    age: Number,
    password: String,
})

const Student = mongoose.model('Student', studentSchema)

const courseSchema = new mongoose.Schema({
    name: String,
    prof: String,
    day: String,
})

const Course = mongoose.model('courses', courseSchema);


const customerSchema = new mongoose.Schema({
    fName: String,
    lName: String,
    cardID: Number,
    isExp: Boolean,
    gender: String,
})

const Customer = new mongoose.model('customers', customerSchema)





const customer = new Customer ({
    fName: 'mohannad',
    lName: 'sabea',
    cardID: 123-00-15-10,
    isExp: false,
    gender: 'male'
})

const customer2 = new Customer({
    fName:'Jamila',
    lName:'Sabea',
    cardID: 15-1234-00,
    isExp: true,
    gender: 'Female'
})



const postSchema = new mongoose.Schema({
    title: String,
    content: String,
    votes: Number,
    author: String
    
})

const Post =  mongoose.model('post', postSchema);

const newPost = new Post({
    title: 'SomeTitle',
    content: 'BlaBlaBla',
    votes: 20,
    author:'Mohannad Sabea'
})

module.exports = {ToDo};