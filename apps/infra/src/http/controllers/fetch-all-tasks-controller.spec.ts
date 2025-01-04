import { app } from 'src/app'
import { makeAddTaskTestChunk } from 'src/tests/factories/test-chuncks.ts/make-add-task-test-chunk'
import { makeFetchAllTasksTestChunk } from 'src/tests/factories/test-chuncks.ts/make-fetch-all-tasks-test-chunk'

describe('-> GET /tasks (fetch all tasks controller)', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('should return all tasks', async () => {
    await makeAddTaskTestChunk(app)
    await makeAddTaskTestChunk(app)
    await makeAddTaskTestChunk(app)

    await makeFetchAllTasksTestChunk(app, 3)
  })
})
