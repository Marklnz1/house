const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
// Require more modules

const api = require('./app/api');

const app = express();
app.use(express.urlencoded({  extended: true }));
app.use(cors());
app.use(express.json());
app.use(morgan('combined'));

app.use('/v1', api);

// Next line renders files in public folder, which contains the build from React
app.use(express.static(path.join(__dirname,  'public')));

// Renders public files
// app.get('/*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// })

module.exports = app;