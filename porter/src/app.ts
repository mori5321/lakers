import multipart from '@fastify/multipart'
import * as Fastify from 'fastify'

type BuildOptions = {
  host: string,
  port: number,
}

const build = async ({ host, port }: BuildOptions) => {
  const fastify = Fastify.fastify({ logger: true })

  fastify.register(multipart)

  fastify.get('/', async (_request, _reply) => {
    return {
      message: 'Welcome to Zip Uploader'
    }
  })

  fastify.get('/health', async (_request, _reply) => {
    return {
      message: 'OK!'
    }
  })

  fastify.post('/upload', async (req, reply) => {
    const file = await req.file()
    if (!file) {
      reply.status(400).send({ message: 'Invalid File' })
      return
    }

    return {
      message: 'Uploaded'
    }
  })

  fastify.listen({ port, host }, (err, address) => {
    if (err) {
      console.error(err)
      process.exit(1)
    }

    console.log(`Server's listening at ${address}`)
  })

  return fastify
}

export { build }

