const express = require('express');
const app = express();

const { addTask, getAllTasks, done, undone } = require('./routes/controllers/api');
const { homePage } = require('./routes/controllers/root');
app.use(express.static('public'))
app.use(express.json());
app.get('/', homePage);
app.post('/api/v1/posts', addTask )
app.get('/api/v1/posts', getAllTasks)
app.put('/api/v1/posts/done/:id', done);
app.put('/api/v1/posts/undone/:id', undone)

app.listen(3000, () => console.log('Server is running on http://localhost:3000'))




// const mongoConnection = async function () {
// try{
    // const connection = await  mongoose.connect('mongodb://127.0.0.1/playground');
//      console.log('connected to Mongo..')

// }
// catch(error) {
//     console.error('Could not connect to MongoDB...',error)
// }


// // .then(() => console.log('Conneced to MongoDB...'))
// // .catch(err => console.error('Could not connect to MongoDB', err));
// }
// mongoConnection();





// async function createCoures() {
//     // eq (equal)
//     // ne (not equal)
//     // gte(geater than or equal to)
//     // gt (greater than )
//     const course = new Course({
//         name: 'Angular',
//         author: 'Mosh',
//         tags: ['node', 'backend'],
//         isPublished: true
//     });
//     const result = await course.save();
//     console.log(result)
// }


// async function getCourses() {
//  const courses =  await Course.find({price: {$gte: 10}}).limit(10).sort({name: 1}).select({name: 1, tags: 1});
//  console.log(courses)
// }
// getCourses();