// test file for cookieController.js
const request = require('supertest');
const { app, server, db } = require('../server/server');  // import our express app

describe('Cookie Test', () => {

    it('should set cookie on POST /', async () => {
        const response = await request(app).post('/');
        expect(response.headers['ssid']).toBeDefined();
        expect(response.status).toEqual(400);
    });

    it('should set cookie on POST /login', async () => {
        const response = await request(app).post('/login');
        expect(response.headers['ssid']).toBeDefined();
        expect(response.status).toEqual(400);
    });

    afterAll(async () => {
        await server.close();
        await db.close();
    })
    
    // it('should set cookie on "/login"')
});