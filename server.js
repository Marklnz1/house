const https = require('http');
require('dotenv').config();

const app = require('./app');
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3500;
let dbURI = process.env.MONGO_URI;
 
// Options object to use inside the createServer function if using HTTPS.
 const options = {
     key: process.env.KEY_LOCATION,
     cert: process.env.CERT_LOCATION
}

const server = https.createServer(app, options);

async function startServer  () {
    await mongoose.connect(dbURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
    server.listen(PORT, () => {
        console.log('Server listening on Port: ', PORT);
    })
}

startServer();

// var http = require('http');
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.write('Hello World!');
//   res.end();
// }).listen(8080);