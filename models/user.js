const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: [true],
        unique: true
    },
    firstName: {
        type: String,
        required: [true]
    },
    lastName: {
        type: String,
        required: [true]
    },
    photo: {
        type: String
    },
    password: {
        type: String,
        required: [true, "You need to secure your account."]
    },
    email: {
        type: String,
        required: [true],
        unique: true,
    },
    age: {
        type: Number,
        required: [true, "Must be of legal age to consume alcoholic beverages."]
    },
    cocktails: [{
        type: String
    }],
    ingredients: [{
        type: String
    }],
});

const User = mongoose.model('User', userSchema);
module.exports = User;