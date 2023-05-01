const express = require('express');
const app =  express();
const {Sequelize, Model, DataTypes} = require('sequelize')
const sequelize = new Sequelize('sqlite::memory:');
const connection = async () => {
    
const sequelize = new Sequelize('todo', 'mohannad', '151984', {
    host: 'localhost',
    port: 5432,
    dialect: 'postgres'
})
try {
 const result = await sequelize.authenticate();

 console.log('connected..')

}
catch(error) {
    console.log(error)
}
}
connection();

const todos = sequelize.define('todos', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    isDone: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
});

const addTask = async() => {
    const mohannad =  todos.create({title: 'mohannad'});

    const user = await todos.findAll();

    console.log(user.id)
}
addTask()
