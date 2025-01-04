import { TasksRepository, UpdateTaskByIdUseCase } from '@digigrow/tasks-domains'
import { PrismaTasksRepository } from '@prisma-db/repositories/prisma-tasks-repository'

export function makeUpdateTaskByIdUseCase(tasksRepository?: TasksRepository) {
  const taskRepo = tasksRepository ?? new PrismaTasksRepository() // Se não for passado um repository, usar o repository padrão
  const useCase = new UpdateTaskByIdUseCase(taskRepo) // Criar o use case

  return useCase // Retornar o use case
}
