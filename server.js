const express = require('express');

const app = express();
const port = 3000;

// task1

app.get('/:echo', (req, res) => {
    res.send(req.params.echo);
});

// task2

const Vigenere = require('caesar-salad').Vigenere;

const password = "admin";

app.get('/encode/:pass', (req, res) => {
    let code = req.params.pass;
    let pass = Vigenere.Cipher(password).crypt(code);
    res.send(pass);
});

app.get('/decode/:pass', (req, res) => {
    let code = req.params.pass;
    let pass = Vigenere.Decipher(password).crypt(code);
    res.send(pass);
});

app.listen(port, () => {
    console.log("Server start on port: " + port);
});