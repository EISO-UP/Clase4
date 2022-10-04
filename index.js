const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const apiPort = 3003;

app.use(bodyParser.urlencoded({extended:true}));
app.use(corse());
app.use(bodyParser.json());

app.get('/', (req, res)=> {
    res.send('Hello world')
});

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));