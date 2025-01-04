import { FetchAllTasksControllerResponseSchema } from '@routes/task-routes-schemas'
import { app } from 'src/app'
import { makeAddTaskTestChunk } from 'src/tests/factories/test-chuncks.ts/make-add-task-test-chunk'
import { makeFetchAllTasksTestChunk } from 'src/tests/factories/test-chuncks.ts/make-fetch-all-tasks-test-chunk'
import request from 'supertest'

describe('-> DELETE /tasks/:id (delete task controller)', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('should be able to delete a task', async () => {
    await makeAddTaskTestChunk(app)
    await makeAddTaskTestChunk(app)
    await makeAddTaskTestChunk(app)

    const tasksResponse = await makeFetchAllTasksTestChunk(app, 3) // Verifica se as 3 tarefas foram criadas
    const tasks = tasksResponse.body as FetchAllTasksControllerResponseSchema

    const response = await request(app.server).delete(`/tasks/${tasks[0]?.id}`)

    expect(response.status).toBe(204) // Deve retornar um status 204

    await makeFetchAllTasksTestChunk(app, 2) // Verifica se sobraram apenas duas tarefas
  })
})
