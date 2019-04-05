const express = require('express');
const links = require('./app/links');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

app.use(cors());
app.use(express.json());

const port = 8003;

mongoose.connect('mongodb://localhost/links', {useNewUrlParser: true}).then(()=>{
    app.use('/', links);

    app.listen(port, () => {
        console.log(`Server started on ${port} port`);
    });
});