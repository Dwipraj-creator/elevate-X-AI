const logger = (req,res,next) =>{
    console.log(`${req.method} request came to ${req.url}`)
    next()
}

module.exports = logger