import fastify from 'fastify'
import cors from '@fastify/cors'
import jwt from '@fastify/jwt'
import 'dotenv/config'
import { memoriesRoutes } from './routes/memories'
import { authRoutes } from './routes/auth'
import multipart from '@fastify/multipart'
import { uploadRoutes } from './routes/upload'
import fastifyStatic from '@fastify/static'
import { resolve } from 'node:path'

const app = fastify()

app.register(fastifyStatic, {
  root: resolve(__dirname, '../uploads'),
  prefix: '/uploads',
})

app.register(cors, {
  origin: true,
})

app.register(jwt, {
  secret: 'have you ever wanted to be eternal?',
})

app.register(multipart)
app.register(memoriesRoutes)
app.register(authRoutes)
app.register(uploadRoutes)

app
  .listen({
    port: 3333,
    host: '0.0.0.0',
  })
  .then(() => console.log('🚀', 'http://localhost:3333'))
