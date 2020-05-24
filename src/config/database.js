const mongoose = require ('mongoose')
mongoose.Promise = global.Promise 

module.exports = mongoose.connect('mongodb://localhost:27017/minhagrana' , {
    useNewUrlParser: true,
    useUnifiedTopology: true 
})

mongoose.Error.messages.general.required = "0 ATRIBUTO '{PATH}' É OBRIGATORIO"
mongoose.Error.messages.String.enum = "'{VALUE}' NÃO É VALIDO PAR AO ATRIBUTO '{PATH}'" 

