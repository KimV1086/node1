const express = require('express');

const app = express();
const port = 3000;

// task1

app.get('/:name', (req, res) => {
    res.send(req.params.name);
});

app.listen(port, () => {
    console.log("Server start on port: " + port);
});