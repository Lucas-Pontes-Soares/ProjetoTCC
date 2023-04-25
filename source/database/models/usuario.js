const mongoose = require("mongoose")

var user = new mongoose.Schema({
    first_name: {type: String, required: true},
    last_name: {type: String, required: true},
    nick: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    friendsId: {type: String, required: false},
    SteamId: {type: String, required: false},
    XboxToken: {type: String, required: false},
    PSname: {type: String, required: false},
});

user.set("toJSON", { virtuals: true });
user.set("toObject", { virtuals: true });
user.set('timestamps', true);

module.exports = mongoose.model('user', user);