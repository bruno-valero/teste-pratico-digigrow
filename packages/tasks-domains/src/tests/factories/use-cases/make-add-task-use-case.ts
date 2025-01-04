import { InMemoryTasksRepository } from '@repositories/in-memory-tasks-repository'
import { TasksRepository } from '@repositories/tasks-repository'
import { AddTaskUseCase } from 'src/domains/tasks/application/use-cases/add-task-use-case'

export function makeAddTaskUseCase(tasksRepository?: TasksRepository) {
  const taskRepo = tasksRepository ?? new InMemoryTasksRepository() // Se não for passado um repository, usar o repository padrão
  const useCase = new AddTaskUseCase(taskRepo) // Criar o use case

  return useCase // Retornar o use case
}
