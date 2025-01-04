import { TasksRepository, UpdateTaskByIdUseCase } from '@digigrow/tasks-domains'
import { PrismaTasksRepository } from '@prisma-db/repositories/prisma-tasks-repository'

/**
 * ---
 *
 * ## Factory Function
 *
 * Destinada para o ambiente de produção, pois ela cria um use case para atualizar uma task utilizando um repositório em banco de dados.
 *
 * ---
 *
 * @param tasksRepository - Repository para a task. Se não for passado, será usado um repository padrão.
 * @returns - Uma instância do use case.
 */
export function makeUpdateTaskByIdUseCase(tasksRepository?: TasksRepository) {
  const taskRepo = tasksRepository ?? new PrismaTasksRepository() // Se não for passado um repository, usar o repository padrão
  const useCase = new UpdateTaskByIdUseCase(taskRepo) // Criar o use case

  return useCase // Retornar o use case
}
