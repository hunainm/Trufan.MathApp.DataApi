exports.checkIsPrime = function (req, res) {
    var number = req.params.number
    var isPrime = checkIfNumberIsPrime(number)
    res.status(200).send(isPrime)
}

const checkIfNumberIsPrime = num => {
    for(let i = 2, j = Math.sqrt(num); i <= j; i++)
        if(num % i === 0) return false; 
    return num > 1;
}