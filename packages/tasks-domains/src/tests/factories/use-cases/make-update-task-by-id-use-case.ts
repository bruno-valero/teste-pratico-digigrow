import { InMemoryTasksRepository } from '@repositories/in-memory-tasks-repository'
import { TasksRepository } from '@repositories/tasks-repository'
import { UpdateTaskByIdUseCase } from 'src/domains/tasks/application/use-cases/update-task-by-id-use-case'

/**
 *
 * ---
 *
 * ## Factory Function
 *
 * Destinada para o ambiente de teste, pois ela cria um use case para atualizar uma task utilizando um repositório em memória.
 *
 * ---
 *
 * @param tasksRepository - Repository para a task. Se não for passado, será usado um repository padrão.
 * @returns - Uma instância do use case.
 */
export function makeUpdateTaskByIdUseCase(tasksRepository?: TasksRepository) {
  const taskRepo = tasksRepository ?? new InMemoryTasksRepository() // Se não for passado um repository, usar o repository padrão
  const useCase = new UpdateTaskByIdUseCase(taskRepo) // Criar o use case

  return useCase // Retornar o use case
}
