const assert = require('assert');
var rewire = require('rewire');
var primenessController = rewire('../src/controllers/primeness.controller');
var checkIfNumberIsPrime = primenessController.__get__('checkIfNumberIsPrime')
var app = require("../src/app")
var chai = require('chai')
  , chaiHttp = require('chai-http');

chai.use(chaiHttp);



describe('Check Prime Number', () => {
 it('should return true', () => {
        assert.equal(true, checkIfNumberIsPrime(2));
    });
 it('should return false', () => {
        assert.equal(false, checkIfNumberIsPrime(1));
    });
});

describe('/GET checkPrime/:number', () => {
    it('it should return true', (done) => {
      chai.request(app)
          .get('/primeness/checkPrime/2')
          .end((err, res) => {
            chai.expect(err).to.be.null;
            chai.expect(res).to.have.status(200);
            chai.expect(res.text).to.equal("true")
            done();
          });
    });
});

describe('/GET checkPrime/:number', () => {
    it('it should return false', (done) => {
      chai.request(app)
          .get('/primeness/checkPrime/1')
          .end((err, res) => {
            chai.expect(err).to.be.null;
            chai.expect(res).to.have.status(200);
            chai.expect(res.text).to.equal("false")
            done();
          });
    });
});