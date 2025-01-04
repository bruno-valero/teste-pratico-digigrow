import { app } from 'src/app'
import { makeAddTaskTestChunk } from 'src/tests/factories/test-chuncks.ts/make-add-task-test-chunk'

describe('-> POST /tasks (add task controller)', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('should be able to add a task', async () => {
    await makeAddTaskTestChunk(app)
  })
})
