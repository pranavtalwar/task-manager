const request = require('supertest')

const app = require('../src/app')

test('Should signup a new user', async () => {
    await request(app).post('/users').send({
        name: 'Pranav Talwar',
        email: 'talwar@example.com',
        password: '1234567'
    }).expect(201)
}) 