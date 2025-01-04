import { Either, right } from '@core/either'
import { Task } from '@entities/task'
import { TasksRepository } from '@repositories/tasks-repository'

export type FindAllTasksUseCaseRequest = null

export type FindAllTasksUseCaseResponse = Either<
  null,
  {
    tasks: Task[]
  }
>

export class FindAllTasksUseCase {
  constructor(private tasksRepository: TasksRepository) {}

  async execute(): Promise<FindAllTasksUseCaseResponse> {
    const tasks = await this.tasksRepository.findAll() // Buscar todas as tasks

    return right({ tasks }) // Se tudo certo, retornar as tasks
  }
}
