const express = require('express');

const app = express();
const port = 8000;

// task1

app.get('/:name', (req, res) => {
    res.send(req.params.name);
});

// task2

const Vigenere = require('caesar-salad').Vigenere;

const password = "admin";

app.get('/encode/:pass', (req, res) => {
    let pass = Vigenere.Cipher(password).crypt(req.params.pass);
    res.send(pass);
});

app.get('/decode/:pass', (req, res) => {
    let pass = Vigenere.Decipher(password).crypt(req.params.pass);
    res.send(pass);
});

app.listen(port, () => {
    console.log("Server start on port: " + port);
});