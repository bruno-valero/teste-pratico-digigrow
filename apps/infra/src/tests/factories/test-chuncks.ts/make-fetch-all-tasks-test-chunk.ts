import { FastifyInstance } from 'fastify'
import request from 'supertest'

export async function makeFetchAllTasksTestChunk(
  app: FastifyInstance,
  shouldHaveLength?: number,
) {
  const response = await request(app.server).get('/tasks')

  expect(response.status).toBe(200)
  expect(response.body).length(shouldHaveLength ?? 3)

  return response
}
