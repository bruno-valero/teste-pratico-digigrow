import { FuncArgs } from '@core/types/function-arguments'
import { makeTask } from '@factories/entities/make-task'
import { TasksRepository } from '@repositories/tasks-repository'
import { AddTaskUseCase } from 'src/domains/tasks/application/use-cases/add-task-use-case'

/**
 *
 * ---
 *
 * ## Factory Function
 *
 * Destinada para o ambiente de teste, essa função cria uma nova task com os dados fornecidos, já realizando as validações necessárias.
 *
 * ---
 *
 *
 * @param props.makeTaskProps - Propriedades para a task a ser criada. Se não for fornecido, será criada uma task aleatória.
 * @param props.tasksRepository - Repository para a task. É obrigatório passar uma instância que do repositório que o SUT está configurado para usar.
 * @param props.sut - Sut (System Under Test) para a task. É obrigatório passar uma instância que está configurada para usar o repositório fornecido.
 * @param props.initialLength - Length inicial das tasks no repositório.
 * @returns - Uma promessa que resolve quando a task for criada.
 */
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
