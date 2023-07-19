const mongoose = require("mongoose")

var playerRequest = new mongoose.Schema({
    userId: {type: String, required: true, ref: 'user'},
    nick: {type: String, required: true},
    title: {type: String, required: true},
    game: {type: String, required: true},
    message: {type: String, required: true},
    datetimeObject: {type: String, required: true},
    date: {type: String, required: true},
    time: {type: String, required: true},
    countPlayers: {type: Number, required: true},
    playersFound: {type: Number, required: true},
    concluded: {type: Boolean, required: true},
});

playerRequest.set("toJSON", { virtuals: true });
playerRequest.set("toObject", { virtuals: true });
playerRequest.set('timestamps', true);

module.exports = mongoose.model('playerRequest', playerRequest);