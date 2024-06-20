// test file for cookieController.js
const request = require('supertest');
const { app, server, db } = require('../server/server');  // import our express app
const { User } = require('../server/models/userModel.js');
const cookieController = require('../server/controllers/cookieController');

const subject = request(app);

describe('Cookie Test', () =>  {
    const user = {
        username: 'user10',
        password: 'pass10'
    }

    beforeAll(() => {
        // create user in database
        // User.create...
        // {username: 'user10', password: 'pass10'}
    })

    it('POST /api/login should set cookies correctly', async () => {
        console.log('user:', user)
        const response = await subject
            .post('/api/login')
            .send({
                username: user.username,
                password: user.password
            })
        
        expect(response.status).toBe(200);

        // check cookies in the response headers
        const cookies = response.headers['set-cookie'];
        expect(cookies).toBeDefined();
        expect(cookies.length).toBeGreaterThan(0);
        console.log('cookies:', cookies);
        console.log('cookies[0]:', cookies[0]);
        expect(cookies).toContain('ssid=j%3A%226671f655d9eeb4e2dc6735a4%22');
    });

    // it('should set cookie on POST /api/signup', async () => {
    //     const response = await request(app).post('/api/signup');
    //     expect(response.headers['ssid']).toBeDefined();
    //     expect(response.status).toEqual(200);
    // });

    afterAll(async () => {
        // delete test user in database
        // User.delete...

        await server.close();
        await db.close();
    })
    
    // it('should set cookie on "/login"')
});