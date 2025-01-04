import { Either, left, right } from '@core/either'
import { TaskNotFoundError } from '@core/errors/errors/tasks-errors/task-not-found-error'
import { TasksRepository } from '@repositories/tasks-repository'

export interface DeleteTaskByIdUseCaseRequest {
  id: string
}

export type DeleteTaskByIdUseCaseResponse = Either<TaskNotFoundError, null>

export class DeleteTaskByIdUseCase {
  constructor(private tasksRepository: TasksRepository) {}

  async execute(
    task: DeleteTaskByIdUseCaseRequest,
  ): Promise<DeleteTaskByIdUseCaseResponse> {
    const existingTask = await this.tasksRepository.findById(task.id)
    if (!existingTask) return left(new TaskNotFoundError()) // Se a task não existir, retornar erro

    await this.tasksRepository.delete(existingTask) // Se tudo certo, deletar a task

    return right(null) // Se tudo certo, retornar null
  }
}
