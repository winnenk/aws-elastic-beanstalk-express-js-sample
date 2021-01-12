const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello World from Howth Dublin on Jan 2021, I love it here!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
