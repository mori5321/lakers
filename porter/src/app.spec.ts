import { build } from './app'

describe('build', () => {
  test('health check respond with 200', async () => {
    const app = await build({ host: '0.0.0.0', port: 9080 })

    const response = await app.inject({
      method: 'GET',
      url: '/health',
    })

    const body = JSON.parse(response.body)
    
    app.close() // Call before expect. This is because if expect fails, following code will not be executed.
    
    expect(response.statusCode).toBe(200)
    expect(body['message']).toBe('OK!')
  })
})
