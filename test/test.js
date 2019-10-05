var assert = require('chai').assert;
var chai = require('chai');
var chaiHttp = require('chai-http');
var testUrl = require('mocha-test-url');
var app = require('../app'); //file name of the entry point file

// Configure chai
chai.use(chaiHttp);
chai.should();

testUrl.setHost('http://localhost:3000');

describe('Sample Tests', function() {
    var test_array = [1, 2, 3, 4];
    describe('#isArray()', function() {
        it('Check if the sample data is array', function() {
            assert.isArray(test_array, 'is array of numbers');
        });
    });
    describe('#include()', function() {
        it('Check if the sample data contains 2', function() {
            assert.include(test_array, 2, 'array contains 2');
        });
    });
});

describe('URL Tests', function() {
    it('Check home URL', function (done) {
        chai.request(app).get('/').end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            assert.equal(res.text, "Hello world");
            done();
        });
    });
    it('Check SUM API URL', function (done) {
        var x = 2, y = 5;
        chai.request(app).get(`/sum?x=${x}&y=${y}`).end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            assert.equal(res.text, (x+y));
            done();
        });
    });
});