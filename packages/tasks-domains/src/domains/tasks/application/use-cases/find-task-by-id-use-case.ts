import { Either, left, right } from '@core/either'
import { TaskNotFoundError } from '@core/errors/errors/tasks-errors/task-not-found-error'
import { Task } from '@entities/task'
import { TasksRepository } from '@repositories/tasks-repository'

export interface FindTaskByIdUseCaseRequest {
  id: string
}

export type FindTaskByIdUseCaseResponse = Either<
  TaskNotFoundError,
  {
    task: Task
  }
>

export class FindTaskByIdUseCase {
  constructor(private tasksRepository: TasksRepository) {}

  async execute(
    task: FindTaskByIdUseCaseRequest,
  ): Promise<FindTaskByIdUseCaseResponse> {
    const existingTask = await this.tasksRepository.findById(task.id)
    if (!existingTask) return left(new TaskNotFoundError()) // Se a task não existir, retornar erro

    return right({ task: existingTask }) // Se tudo certo, retornar a task
  }
}
