const mongoose = require ('mongoose')
mongoose.Promise = global.Promise 

module.exports = mongoose.connect('mongodb://locaslhost/minhagrana' , {
    useNewUrlParser: true,
    useUnifiedTopology: true 
})
