const request = require('supertest');
const app = require('./server');

describe('API Tests', () => {
  it('should get posts', async () => {
    const res = await request(app).get('/api/posts');
    expect(res.statusCode).toEqual(200);
  });

  it('should create a post', async () => {
    const res = await request(app)
      .post('/api/posts')
      .send({ name: 'Test', message: 'Test message' });
    expect(res.statusCode).toEqual(201);
  });
});