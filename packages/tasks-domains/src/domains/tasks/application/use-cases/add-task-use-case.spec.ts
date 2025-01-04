import { TaskDescriptionLengthLongerThanPermittedError } from '@core/errors/errors/tasks-errors/task-description-longer-than-allowed-error'
import { TaskDescriptionMissingError } from '@core/errors/errors/tasks-errors/task-description-missing-error'
import { TaskTitleMissingError } from '@core/errors/errors/tasks-errors/task-title-missing-error'
import { createOneTask } from '@factories/tests-chunks/make-creation-of-one-task'
import { makeAddTaskUseCase } from '@factories/use-cases/make-add-task-use-case'
import { InMemoryTasksRepository } from '@repositories/in-memory-tasks-repository'
import { TasksRepository } from '@repositories/tasks-repository'

import { AddTaskUseCase } from './add-task-use-case'

describe('add task use case', () => {
  // eslint-disable-next-line
  let tasksRepository: TasksRepository
  // eslint-disable-next-line
  let sut: AddTaskUseCase // SUT - System Under Test

  beforeEach(() => {
    tasksRepository = new InMemoryTasksRepository()
    sut = makeAddTaskUseCase(tasksRepository)
  })

  it('should add a task', async () => {
    await createOneTask({ tasksRepository, sut })
  })

  it('should not be able to add a task without title', async () => {
    const data = {
      title: '',
      description: 'Task 1 description',
    }

    const tasks = await tasksRepository.findAll()
    expect(tasks).toHaveLength(0) // Tasks inicialmente devem estar vazios

    const response = await sut.execute(data)
    expect(response.isLeft()).toBe(true) // Deve retornar um resultado negativo

    if (response.isLeft()) {
      const error = response.value
      expect(error).toBeInstanceOf(TaskTitleMissingError) // Deve ser um erro de título ausente
    }

    const tasksRefetch = await tasksRepository.findAll()
    expect(tasksRefetch).toHaveLength(0) // Não deve ter sido criado nenhuma nova task
  })

  it('should not be able to add a task without description', async () => {
    const data = {
      title: 'Task 1',
      description: '',
    }

    const tasks = await tasksRepository.findAll()
    expect(tasks).toHaveLength(0) // Tasks inicialmente devem estar vazios

    const response = await sut.execute(data)
    expect(response.isLeft()).toBe(true) // Deve retornar um resultado negativo

    if (response.isLeft()) {
      const error = response.value
      expect(error).toBeInstanceOf(TaskDescriptionMissingError) // Deve ser um erro de descrição ausente
    }

    const tasksRefetch = await tasksRepository.findAll()
    expect(tasksRefetch).toHaveLength(0) // Não deve ter sido criado nenhuma nova task
  })

  it('should not be able to add a task with a descriptions longer than 255 characters', async () => {
    const data = {
      title: 'Task 1',
      description: 'long description'.repeat(256),
    }

    const tasks = await tasksRepository.findAll()
    expect(tasks).toHaveLength(0) // Tasks inicialmente devem estar vazios

    const response = await sut.execute(data)
    expect(response.isLeft()).toBe(true) // Deve retornar um resultado negativo

    if (response.isLeft()) {
      const error = response.value
      expect(error).toBeInstanceOf(TaskDescriptionLengthLongerThanPermittedError) // Deve ser um erro de descrição ausente
    }

    const tasksRefetch = await tasksRepository.findAll()
    expect(tasksRefetch).toHaveLength(0) // Não deve ter sido criado nenhuma nova task
  })
})
