import multipart from '@fastify/multipart'
import * as Fastify from 'fastify'

type RunOptions = {
  host: string,
  port: number,
}

const buildApp = () => {
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


  const run = ({ host, port }: RunOptions) => {
    fastify.listen({ host, port }, (err, address) => {
      if (err) {
        console.error(err)
        process.exit(1)
      }

      console.log(`Server's listening at ${address}`)
    })
  }

  const inject = (options: Fastify.InjectOptions) => {
    return fastify.inject(options)
  }

  const close = fastify.close

  return {
    run,
    inject,
    close,
  }
}

export { buildApp }

