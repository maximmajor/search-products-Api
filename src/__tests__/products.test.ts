import request from 'supertest';
import app from '../app';

describe('Get all products', () => {
  it('Get all product', async () => {
    await request(app).get('/products').expect(200);
  })

})

describe('To Search for Products by specifications', () => {
  it('invalid Route', async () => {
    await request(app).get('/products/spec').expect(500);
  })

  it('No products with the specified specifications', async () => {
    await request(app).get('/products/spec?specifications=notinspec').expect(400);
  })

  it('found products with the specified specifications', async () => {
    await request(app).get('/products/spec?specifications=low-carb').expect(200);
  })
})


describe('To order the Products by price in descending order ', () => {
  it('found ordered Products by price in descending order', async () => {
    await request(app).get('/products/price/desc').expect(200);
  })
})


describe('To order the Products by price in ascending order', () => {
  it('found ordered Products by price in ascending order', async () => {
    await request(app).get('/products/price/asc').expect(200);
  })
})