import { buildApp } from './app'

describe('run', () => {
  test('health check respond with 200', async () => {
    const app = await buildApp()

    app.run({ host: '0.0.0.0', port: 8090 })

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
