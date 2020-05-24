const express = require ('express')

module.exports = function(server){ //pegando o server de server.js (express)

    //URL PARA TODAS AS ROTAS

    const router = express.Router()
    server.use('/api', router)

    // Rotas Ciclo de Pagamento

    const BillingCycle = require ('../api/billycicle/billingCycleService')
    BillingCycle.register(router, '/billingCycles')

}