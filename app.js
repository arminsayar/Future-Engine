const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, '')));

app.set('view engine', 'ejs');

app.listen(3000);

app.get('/', function (req, res) {
    res.render('index');
});

app.get(function (req, res) {
    res.status(404);
});
