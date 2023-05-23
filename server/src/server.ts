import fastify from 'fastify'
import { memoriesRoutes } from './routes/memories'
import cors from '@fastify/cors'
import 'dotenv/config'
import { authRoutes } from './routes/auth'

const app = fastify()

app.register(cors, {
  origin: true,
})

app.register(memoriesRoutes)
app.register(authRoutes)

app
  .listen({
    port: 3333,
  })
  .then(() => console.log('🚀'))
