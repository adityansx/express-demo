const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home.ejs');
});

app.get('/random', (req, res) => {
    res.render('random', { val: Math.floor(Math.random() * 100) }, function(err, html) {
        res.send(html);
    });
});

app.get('/blog', (req, res) => {

});

app.listen(PORT, () => {
    console.log('Server online on', PORT);
});