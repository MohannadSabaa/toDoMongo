const express = require('express');
const app = express();

const { addTask, getAllTasks, done, undone } = require('./routes/controllers/api');
const { homePage } = require('./routes/controllers/root');
app.use(express.static('public'))
app.use(express.json());
app.get('/', homePage);
app.route('/api/v1/posts', addTask )
app.get('/api/v1/posts', getAllTasks)
app.put('/done/:id', done);
app.put('undone/:id', undone)

app.listen(3000, () => console.log('Server is running on http://localhost:3000'))




