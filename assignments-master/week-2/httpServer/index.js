const express = require("express")
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const port = process.env.PORT || 3000
const {  v4: uuid } = require('uuid');
uuid();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
// app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req,res) => {
    res.send('TODO LIST');
})
app.get('/new', (req,res) => {
    const message = req.body.message;
    res.json({
        output: "2 + 2 is 4."
    })
    res.send("HEYO!!!")
    console.log(message);
})

const todos = [
    {
    id: uuid(),
    todoTask: "Buy Gifts",
    isCompleted: false
    }
]

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})