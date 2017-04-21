const chai = require('chai');
const expect=chai.expect;
const facebook = require('../app.js');

describe('Circular function', () => {

  it('should be function', () => {
    expect(facebook).to.be.a('function');
  });

});

describe('Data entered', () => {

  it('the main word should be a string', () => {
    expect(facebook.bind(null,[4,"toto"])).to.throw("Only numbers in the array");
    expect(facebook.bind(null,6)).to.throw("Only array as first argument");
    expect(facebook.bind(null,{gender: "male"})).to.throw("Only array as first argument");
    expect(facebook.bind(null,"hi")).to.throw("Only array as first argument");
    expect(facebook.bind(null,[4,5],"Hi")).to.throw("Only number as second argument");
  });
});

describe('check for true or false', () => {

  it('should verify that there is a sum of continuous sum in the array that equals the second arggument', () => {
    expect(facebook([5,6,1,2,7],10)).to.be.equal(true);
    expect(facebook([2,2,2,2,2],3)).to.be.equal(false);
    expect(facebook([1,2,3,4,5,6,7],11)).to.be.equal(true);
    expect(facebook([5,4,3,2,1],10)).to.be.equal(true);

  });

});