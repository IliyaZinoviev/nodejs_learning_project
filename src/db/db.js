const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    user:process.env.MONGODB_USERNAME,
    pass: process.env.MONGODB_PWD
}).catch(function (reason) {
    console.log('Unable to connect to the mongodb instance. Error: ', reason)
})