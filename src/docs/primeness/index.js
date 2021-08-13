const checkPrime = require('./checkPrime');

module.exports = {
    paths:{
        '/checkPrime/{number}':{
            ...checkPrime,
        }
    }
}