const _ = require ('lodash')

module.exports = (req,res, next) => {
     const bundle = res.locals.bundle

     if(bundle.erros){
         const errors = parseErros(bundle.erros)
         res.status(500).json({errors})
     }else {
         next()
     }
}

const parseErros = (nodeRestfulErrors) => {
    const errors = []
    _.forIn(nodeRestfulErrors, error => errors.push(error.message))
    return errors

}