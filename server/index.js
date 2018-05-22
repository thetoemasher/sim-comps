const express = require('express')
    , bodyParser = require('body-parser')
    , massive = require('massive')
    , controller = require('./controller')
    , port = 8787;
    require('dotenv').config();

const app = express();

app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then(connection => {
    app.set('db', connection);
    console.log('db connected');
})

app.get('/api/books', controller.getBooks);
app.get('/api/books/:id', controller.getBookInfo)
app.get('/api/sub-query', (req, res, next) => {
    req.body.search = "Looking for Alaska"
    next();
},controller.subQuery)


app.listen(port, () => console.log(`we don't need no water let port ${port} burn`));