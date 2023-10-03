// Tworzenie obiektu Express
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

// Ustawienie ścieżki do plików widoków
app.set('view engine', 'ejs');

// Endpoint dla formularza
app.post('/form', (req, res) => {
    const username = req.body.username;
    res.render('hello', { name: username });
});

// Endpoint dla widoku głównego z formularzem
app.get('/', (req, res) => {
    res.render('index');
});

app.listen(port, () => {
    console.log('Serwer nasłuchuje na porcie 3000');
});