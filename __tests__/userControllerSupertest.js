const request = require('supertest');
//const fs = require('fs');
//const server = 'http://localhost:3000';
//const path = require('path');
// path to server file??
const app = require('../server/server.js');
// server/server.js

// beforeAll
// afterAll 
// beforeEach(async () => {
//   await db.reset();  // Make sure this function clears out the users or relevant data.
// });

// afterEach(async () => {
//   await db.clear();  // Clears out the database after each test if needed.
// });



 // User.findOne({})
    // it should return error if username exited?
    // expect status200
    // post('/')
    // .expect('Content-Type', /application\/json/)
// User.create({})
    // it should create a new user successfully?
    // status(200)
    // post('/')
    // .expect('Content-Type', /application\/json/)  

    // genrate random username everytime 
const generateRandomUsername = () => {
  return `user${Math.random().toString()}`;
};

describe('Signup Route Integration', () => {
    describe('POST /api/signup', () => {
      // Test case for successful signup
      it('should respond with 201 status and json content type on successful signup', async () => {
        const newUser = {
          username: generateRandomUsername(),
          password: '1'
        };
        const response = await request(app)
          .post('/api/signup')
          .send(newUser)
          .expect('Content-Type', /application\/json/)
          .expect(201);
  
        expect(response.body).toHaveProperty('message', 'User created successfully');
      });
  
      // Test case for handling duplicate username
      it('should respond with 400 status if the username already exists', async () => {
        const existingUser = {
          username: 'existingUser',
          password: '1'
        };
        // Assuming the first request creates the user
        await request(app).post('/api/signup').send(existingUser);
  
        // The second request should fail with a 400 error
        const response = await request(app)
          .post('/api/signup')
          .send(existingUser)
          .expect('Content-Type', /application\/json/)
          .expect(400);
  
        expect(response.body).toHaveProperty("err", "Ann error occurred, username is already exited");
      });
    });
  });


// check the createUser // unique username
describe('POST /api/login', () => {
    it('should respond with 200 and JSON content type', async () => {
      const response = await request(app)
        .post('/api/login')
        .send({ username: 'rabbittest', password: 'password' })
        .expect('Content-Type', /application\/json/)
        .expect(200);
  
      console.log(response.body);
      expect(response.status).toBe(200);
    });
  });




