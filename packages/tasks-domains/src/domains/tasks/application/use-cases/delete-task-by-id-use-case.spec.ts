import { createOneTask } from '@factories/tests-chunks/make-creation-of-one-task'
import { makeAddTaskUseCase } from '@factories/use-cases/make-add-task-use-case'
import { makeDeleteTaskByIdUseCase } from '@factories/use-cases/make-delete-task-by-id-use-case'
import { InMemoryTasksRepository } from '@repositories/in-memory-tasks-repository'
import { TasksRepository } from '@repositories/tasks-repository'

import { DeleteTaskByIdUseCase } from './delete-task-by-id-use-case'

describe('delete task by id use case', () => {
  // eslint-disable-next-line
  let tasksRepository: TasksRepository
  // eslint-disable-next-line
  let sut: DeleteTaskByIdUseCase // SUT - System Under Test

  beforeEach(() => {
    tasksRepository = new InMemoryTasksRepository()
    sut = makeDeleteTaskByIdUseCase(tasksRepository)
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

    const tasks = await tasksRepository.findAll()
    expect(tasks).toHaveLength(3) // Deve haver 3 tasks

    const secondTask = tasks[1]
    if (!secondTask) throw new Error('Second task not found') // Se não existir, retorne um erro

    await sut.execute({ id: secondTask.id.value })

    const tasksAfter = await tasksRepository.findAll()
    expect(tasksAfter).toHaveLength(2) // Deve ter sido excluído a task
  })
})
