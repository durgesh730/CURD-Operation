const mongoose = require('mongoose');
const { Schema } = mongoose;

const LoginSchema = new Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    project: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const LoginModel = mongoose.model('login', LoginSchema);

module.exports = LoginModel