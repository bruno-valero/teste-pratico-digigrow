import { InMemoryTasksRepository } from '@repositories/in-memory-tasks-repository'
import { TasksRepository } from '@repositories/tasks-repository'
import { FindTaskByIdUseCase } from 'src/domains/tasks/application/use-cases/find-task-by-id-use-case'

export function makeFindTaskByIdUseCase(tasksRepository?: TasksRepository) {
  const taskRepo = tasksRepository ?? new InMemoryTasksRepository() // Se não for passado um repository, usar o repository padrão
  const useCase = new FindTaskByIdUseCase(taskRepo) // Criar o use case

  return useCase // Retornar o use case
}
