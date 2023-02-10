const mongoose = require("mongoose")

var user = new mongoose.Schema({
    first_name: {type: String, required: true},
    last_name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
});

user.set("toJSON", { virtuals: true });
user.set("toObject", { virtuals: true });
user.set('timestamps', true);

module.exports = mongoose.model('user', user);