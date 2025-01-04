import { FuncArgs } from '@core/types/function-arguments'
import { TasksRepository } from '@repositories/tasks-repository'
import { AddTaskUseCase } from 'src/domains/tasks/application/use-cases/add-task-use-case'
import { makeTask } from 'src/tests/entities/make-task'

export async function createOneTask({
  makeTaskProps,
  tasksRepository,
  sut,
  initialLength,
}: {
  makeTaskProps?: FuncArgs<typeof makeTask>
  tasksRepository: TasksRepository
  sut: AddTaskUseCase
  initialLength?: number
}) {
  initialLength = initialLength ?? 0

  // eslint-disable-next-line
  const { id, createdAt, updatedAt, ...data } = makeTask(...(makeTaskProps ?? [])).toObject() // Converte o objeto para um objeto com apenas os campos que o use case precisa

  const tasks = await tasksRepository.findAll()
  expect(tasks).toHaveLength(initialLength) // Tasks inicialmente devem estar com a length inicial

  const response = await sut.execute(data)
  expect(response.isRight()).toBe(true) // Deve retornar um resultado positivo

  const tasksAfter = await tasksRepository.findAll()
  expect(tasksAfter).toHaveLength(initialLength + 1) // Deve ter sido criado uma nova task

  const task = tasksAfter[initialLength]
  expect(task?.toObject()).toEqual(expect.objectContaining(data)) // A task deve ter os dados esperados
}
