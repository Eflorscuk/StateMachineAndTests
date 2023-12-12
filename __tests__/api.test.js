const { app, server } = require('../index')
const request = require('supertest')

describe('API tests', () => {
    afterAll((done) => {
        // Certifique-se de que server.close está definido antes de chamá-lo
        if (server && server.close) {
            server.close(() => {
                console.log('Test server closed.')
                done()
            })
        } else {
            console.error('Unable to close the server.')
            done()
        }
    })
    test('to get all tasks', async () => {
        const response = await request(app).get('/tasks')
        expect(response.status).toBe(200)
        expect(Array.isArray(response.body)).toBe(true)
    })
    test('Put a new task', async () => {
        const response = await request(app)
            .post('/tasks')
            .send({ description: 'New task' })
        expect(response.status).toBe(200)
        expect(response.body).toHaveProperty('description', 'New task')
        expect(response.body).toHaveProperty('state', 'pending')
        expect(response.body.id).toBeDefined()
        expect(Number.isInteger(response.body.id)).toBe(true)
    }) 
})
