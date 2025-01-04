import { AddTaskControllerResponseSchema } from '@routes/task-routes-schemas'
import { app } from 'src/app'
import { makeAddTaskTestChunk } from 'src/tests/factories/test-chuncks.ts/make-add-task-test-chunk'
import request from 'supertest'

describe('-> GET /tasks/:id (find task by id controller)', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('should be able to find a task by its id', async () => {
    const taskResponse = await makeAddTaskTestChunk(app)
    const task = taskResponse.body as AddTaskControllerResponseSchema

    const response = await request(app.server).get(`/tasks/${task.id}`)

    expect(response.status).toBe(200)
    expect(response.body).toEqual(
      expect.objectContaining({
        title: task.title,
        description: task.description,
      }),
    )
  })
})
