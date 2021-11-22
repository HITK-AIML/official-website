const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.use(express.static('public/css'));
app.use(express.static('public/js'));
app.use(express.static('public/img'));

app.get('/', (req, res) =>{
    res.render('index');
})

app.get('/links', (req, res) =>{
    res.render('links');
})

app.listen(port, ()=>{
    console.log('Server active');
})
