const mongoose = require("mongoose")
const dotenv = require('dotenv');
dotenv.config();

var urlDbTCC = process.env.URLDB
console.log("VERSAO:: " + mongoose.version)

const connect = async () => {
    mongoose.set("strictQuery", false);

    mongoose.connect(urlDbTCC, {
        useNewUrlParser: true, 
        useUnifiedTopology: true, 
    }).then(()=>{
        console.log('db connected')
    })
}

const close = () => {
    return mongoose.disconnect()
}

module.exports = {
    connect,
    close,
}