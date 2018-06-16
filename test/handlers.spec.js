const chai = require('chai');
const spies = require('chai-spies');
const createHandlers = require('./../src/handlers');

chai.use(spies);
const { expect } = chai;

describe('handlers', () => {
  it('should exits be a function', () => {
    const { getImg } = createHandlers({ axios: {}, sharpe: {}})
    expect(getImg).to.exist.and.be.a.function;
  });
});
