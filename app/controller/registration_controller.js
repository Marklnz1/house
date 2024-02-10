const Registration = require("../models/Registration");

module.exports =async (req, res, next) => {
const registration_data = req.body;
const newRegistration = new Registration(registration_data);
await newRegistration.save();
res.redirect('/');
 
};