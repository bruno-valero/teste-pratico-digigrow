import { FuncArgs, makeTask } from '@digigrow/tasks-domains'
import { FastifyInstance } from 'fastify'
import request from 'supertest'

export async function makeAddTaskTestChunk(
  app: FastifyInstance,
  props?: { id?: string; taskProps?: FuncArgs<typeof makeTask>[0] },
) {
  const data = makeTask(props?.taskProps, props?.id).toObject()
  const response = await request(app.server).post('/tasks').send(data)

  expect(response.status).toBe(201)
  expect(response.body).toEqual(
    expect.objectContaining({
      title: data.title,
      description: data.description,
    }),
  )

  return response
}
