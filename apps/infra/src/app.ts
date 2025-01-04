import { DataValidationError } from '@digigrow/tasks-domains'
import { env } from '@env/env'
import cors from '@fastify/cors'
import fastifySwagger from '@fastify/swagger'
import fastifySwaggerUi from '@fastify/swagger-ui'
import { taskRoutes } from '@routes/task-routes'
import fastify from 'fastify'
import {
  jsonSchemaTransform,
  serializerCompiler,
  validatorCompiler,
  ZodTypeProvider,
} from 'fastify-type-provider-zod'
import { ZodError } from 'zod'

export const app = fastify().withTypeProvider<ZodTypeProvider>()

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

app.register(cors, { origin: '*' })

app.register(fastifySwagger, {
  openapi: {
    info: {
      title: 'Tasks API',
      description: 'API para gerenciamento de tarefas proposto pela Digigrow.',
      version: '1.0.0',
    },
  },
  transform: jsonSchemaTransform,
})

app.register(fastifySwaggerUi, {
  routePrefix: '/docs',
})

app.register(taskRoutes)

app.setErrorHandler((err, _req, res) => {
  if (env.NODE_ENV !== 'prod') {
    console.error(err)
  }

  const isFromRequest =
    err.statusCode && err.statusCode >= 400 && err.statusCode < 500

  if (err instanceof ZodError || isFromRequest) {
    return res.status(400).send({
      message: 'Validation error',
      issues: (err as unknown as ZodError).format(),
    })
  }
  if (err instanceof DataValidationError) {
    return res
      .status(400)
      .send({ message: 'Validation error', issues: err.message })
  }
  return res.status(500).send({ message: 'Internal server error.' })
})
