const express = require('express');

// Import api router for every component
// EXAMPLE: const loginRouter = require('./login/login.api');
const registration_controller = require('./controller/registration_controller.js');
const api = express.Router();
api.post('/registration', registration_controller)
// Use api router for every component
// EXAMPLE: api.use('/login', loginRouter);

module.exports = api;