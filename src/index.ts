import express = require('express');

const app: express.Application = express();
const port = 3000;

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.listen(port, function () {
    console.log('Listening on port: ' + port);
});