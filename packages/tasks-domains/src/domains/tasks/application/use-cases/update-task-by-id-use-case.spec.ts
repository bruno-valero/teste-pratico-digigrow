import { TaskDescriptionLengthLongerThanPermittedError } from '@core/errors/errors/tasks-errors/task-description-longer-than-allowed-error'
import { createOneTask } from '@factories/tests-chunks/make-creation-of-one-task'
import { makeAddTaskUseCase } from '@factories/use-cases/make-add-task-use-case'
import { makeUpdateTaskByIdUseCase } from '@factories/use-cases/make-update-task-by-id-use-case'
import { InMemoryTasksRepository } from '@repositories/in-memory-tasks-repository'
import { TasksRepository } from '@repositories/tasks-repository'

import { UpdateTaskByIdUseCase } from './update-task-by-id-use-case'

describe('delete task by id use case', () => {
  // eslint-disable-next-line
  let tasksRepository: TasksRepository
  // eslint-disable-next-line
  let sut: UpdateTaskByIdUseCase // SUT - System Under Test

  beforeEach(() => {
    tasksRepository = new InMemoryTasksRepository()
    sut = makeUpdateTaskByIdUseCase(tasksRepository)
  })

  it('should update a task by its id', async () => {
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

    const secondTaskTitle = secondTask.title // retira o título da task para ser comparado, pois é um in memory repository, o que indica que a mudança na ref de memória irá alterar as partes profundas deste objeto

    const sutResponse = await sut.execute({
      id: secondTask.id.value,
      description: 'new description',
      title: 'new title',
    })
    expect(sutResponse.isRight()).toBe(true) // Deve retornar um resultado positivo

    if (sutResponse.isRight()) {
      const task = sutResponse.value.task
      console.log('task', task.toObject())
      console.log('secondTask', secondTask.toObject())
      expect(task.toObject()).not.toEqual(
        expect.objectContaining({ title: secondTaskTitle }),
      )

      expect(task.toObject()).toEqual(
        expect.objectContaining({
          description: 'new description',
          title: 'new title',
        }),
      )
    }
  })

  it('should not be able to update a task description with a length longer than 255 characters', async () => {
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

    const sutResponse = await sut.execute({
      id: secondTask.id.value,
      description: 'long description'.repeat(256),
      title: 'new title',
    })
    expect(sutResponse.isLeft()).toBe(true) // Deve retornar um resultado negativo

    if (sutResponse.isLeft()) {
      const error = sutResponse.value
      expect(error).toBeInstanceOf(
        TaskDescriptionLengthLongerThanPermittedError,
      ) // Deve ser um erro de descrição ausente
    }
  })
})
