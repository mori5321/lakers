import { buildApp } from './app'

const main = async () => {
  const app = buildApp()

  app.run({ host: '0.0.0.0', port: 8080 })
} 

main()
