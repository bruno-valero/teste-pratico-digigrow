import { FindAllTasksUseCase, TasksRepository } from '@digigrow/tasks-domains'
import { PrismaTasksRepository } from '@prisma-db/repositories/prisma-tasks-repository'

export function makeFindAllTasksUseCase(tasksRepository?: TasksRepository) {
  const taskRepo = tasksRepository ?? new PrismaTasksRepository() // Se não for passado um repository, usar o repository padrão
  const useCase = new FindAllTasksUseCase(taskRepo) // Criar o use case

  return useCase // Retornar o use case
}
