const assert = require('assert');
var rewire = require('rewire');
var primenessController = rewire('../src/controllers/primeness.controller');
var checkIfNumberIsPrime = primenessController.__get__('checkIfNumberIsPrime')

describe('Check Prime Number', () => {
 it('should return true', () => {
        assert.equal(true, checkIfNumberIsPrime(2));
    });
 it('should return false', () => {
        assert.equal(true, checkIfNumberIsPrime(1));
    });
});