const BillingCycle = require ('./billingCycle')
const ErrorHandler = require ('../commum/errorHandler')

BillingCycle.methods (['get', 'post', 'put', 'delete'])
BillingCycle.updateOptions({new: true, runValidators: true})
BillingCycle.after('post', ErrorHandler).after('put', ErrorHandler)



BillingCycle.route('count', (req, res, next) =>{
    BillingCycle.count ((error, value) => {
            if (error) {
                 res.status(500).json({errors: [error]})
            }else {
                res.json({value})
            }
            
    })
})

BillingCycle.route('summary', (req, res, next) => {
    BillingCycle.aggregate([{ 
        $project: {credit: {$sum: "$credits.value"}, debt: {$sum: "$debts.value"}}  //Somando os valores de credito e debito
    }, { 
        $group: {_id: null, credit: {$sum: "$credit"}, debt: {$sum: "$debt"}} //Somando todos os valores de crédito e debito
    }, { 
        $project: {_id: 0, credit: 1, debt: 1} // credit = true, debito = true, id = false
    }], (error, result) => {
        if(error) {
            res.status(500).json({errors: [error]})
        } else {
            res.json(result[0] || {credit: 0, debt: 0})
        }
    })
})

module.exports = BillingCycle 