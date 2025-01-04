import { createOneTask } from '@factories/tests-chunks/make-creation-of-one-task'
import { makeAddTaskUseCase } from '@factories/use-cases/make-add-task-use-case'
import { makeFindAllTasksUseCase } from '@factories/use-cases/make-find-all-tasks-use-case'
import { InMemoryTasksRepository } from '@repositories/in-memory-tasks-repository'
import { TasksRepository } from '@repositories/tasks-repository'

import { FindAllTasksUseCase } from './find-all-tasks-use-case'

describe('find all tasks by id use case', () => {
  // eslint-disable-next-line
  let tasksRepository: TasksRepository
  // eslint-disable-next-line
  let sut: FindAllTasksUseCase // SUT - System Under Test

  beforeEach(() => {
    tasksRepository = new InMemoryTasksRepository()
    sut = makeFindAllTasksUseCase(tasksRepository)
  })

  it('should add a task', async () => {
    const addTaskUseCase = makeAddTaskUseCase(tasksRepository)

    // -----------------------------------------------------------------------------------------
    // cria 3 tarefas
    await createOneTask({ tasksRepository, sut: addTaskUseCase })
    await createOneTask({
      tasksRepository,
      sut: addTaskUseCase,
      initialLength: 1,
    })
    await createOneTask({
      tasksRepository,
      sut: addTaskUseCase,
      initialLength: 2,
    })
    // -----------------------------------------------------------------------------------------

    const sutResponse = await sut.execute()
    expect(sutResponse.isRight()).toBe(true) // Deve retornar um resultado positivo

    if (sutResponse.isRight()) {
      const tasks = sutResponse.value.tasks
      expect(tasks).toHaveLength(3) // Deve haver 3 tasks
    }
  })
})
