const mgoose = require('mongoose')

function errorHandling (err, req, res, next) {
    console.error(err)
    if ( err instanceof mgoose.Error.ValidationError ) {
        return res.status(400).json(err.errors)
    }
    return res.status(500).json({
        message: 'Server internal error'
    })
}

module.exports = errorHandling;