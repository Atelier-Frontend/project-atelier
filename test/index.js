process.env.NODE_ENV = 'test';

const chai = require('chai');
const expect = chai.expect;
const should = chai.should();
const chaiHttp = require('chai-http');
const server = require('../server/index.js');

chai.use(chaiHttp);

describe('Product Overview API Calls', () => {

  it('Should return list of products', (done) => {
    chai.request(server)
    .get('/products')
    .end((err, res) => {
      expect(res.status).to.equal(200);
      expect(res.body).to.have.lengthOf(5);
      done();
    });
  });

  it('Should return product information for a specified product', (done) => {
    chai.request(server)
      .get('/products/product_id')
      .send({ id: '71697' })
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.be.an('object');
        done();
      });
  });

  it('Should return all styles for a given product', (done) => {
    chai.request(server)
      .get('/products/product_id/styles')
      .send({ id: '71697' })
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.results).to.be.an('array');
        expect(res.body.results).to.have.lengthOf(6);
        expect(res.body.results[0]).to.have.property('style_id');
        done();
      });
  });

  it('Should return the id list of products related to specified product id', (done) => {
    chai.request(server)
      .get('/products/product_id/related')
      .send({ id: '71697' })
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.be.an('array');
        expect(res.body).to.have.lengthOf(4);
        expect(res.body).to.eql([71698, 71699, 71704, 71703]);
        done();
      });
  });
});