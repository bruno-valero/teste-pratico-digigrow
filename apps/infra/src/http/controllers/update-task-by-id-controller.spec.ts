import { AddTaskControllerResponseSchema } from '@routes/task-routes-schemas'
import { app } from 'src/app'
import { makeAddTaskTestChunk } from 'src/tests/factories/test-chuncks.ts/make-add-task-test-chunk'
import request from 'supertest'

describe('-> PUT /tasks/:id (update task by id controller)', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('should be able to update a task by its id', async () => {
    const taskResponse = await makeAddTaskTestChunk(app)
    const task = taskResponse.body as AddTaskControllerResponseSchema

    const response = await request(app.server).put(`/tasks/${task.id}`).send({
      title: 'new title',
      description: 'new description',
    })

    expect(response.status).toBe(200)
    expect(response.body).toEqual(
      expect.objectContaining({
        title: 'new title',
        description: 'new description',
      }),
    )
    expect(response.body).not.toEqual(
      expect.objectContaining({
        title: task.title,
        description: task.description,
      }),
    )
  })

  it('should not be able to update a task with a description longer than 255 characters', async () => {
    const taskResponse = await makeAddTaskTestChunk(app)
    const task = taskResponse.body as AddTaskControllerResponseSchema

    const response = await request(app.server)
      .put(`/tasks/${task.id}`)
      .send({
        title: 'new title',
        description: 'new description'.repeat(256),
      })

    expect(response.status).toBe(400)
    expect(response.body).toEqual(
      expect.objectContaining({
        message: expect.any(String),
      }),
    )
  })

  it('should not be able to update a task with a title having 0 characters', async () => {
    const taskResponse = await makeAddTaskTestChunk(app)
    const task = taskResponse.body as AddTaskControllerResponseSchema

    const response = await request(app.server).put(`/tasks/${task.id}`).send({
      title: '',
      description: 'new description',
    })

    expect(response.status).toBe(400)
    console.log('response.body', response.body)
    expect(response.body).toEqual(
      expect.objectContaining({
        message: expect.any(String),
      }),
    )
  })
})
