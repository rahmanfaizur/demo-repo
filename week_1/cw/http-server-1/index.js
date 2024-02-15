const express = require("express");
const app = express();
const path = require('path');
const { v4: uuid } = require('uuid');
uuid();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const todos = [
    {
        id: uuid(),
        task: "Buy Apples",
        completed: false
    },
    {
        id: uuid(),
        task: "Go for a Run",
        completed: false
    },
    {
        id: uuid(),
        task: "Coding Classes",
        completed: false
    }
]

app.get("/todos", (req,res) => {
    res.render("todos/tasks", { task });
})
app.get('/todos/new', (req, res) => {
    res.render('todos/new');
})

app.post('/todos', (req,res) => {
    const { username, todos } = req.body;
    todos.push({ username, todos, id: uuid() })
    res.redirect('/todos');  
})                         
app.listen(8080, () => {
    console.log("Listening on port 8080.")
})                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         