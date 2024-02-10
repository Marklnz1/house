const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const registration_schema = new Schema({
    name:String,
    lastname:String,
    email:String,
    phone:String,
    country:String,
    description:String
    
});
module.exports = mongoose.model('registration',registration_schema,"registration");