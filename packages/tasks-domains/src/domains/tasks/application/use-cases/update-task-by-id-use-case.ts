import { Either, left, right } from '@core/either'
import { TaskDescriptionLengthLongerThanPermittedError } from '@core/errors/errors/tasks-errors/task-description-longer-than-allowed-error'
import { TaskNotFoundError } from '@core/errors/errors/tasks-errors/task-not-found-error'
import { TaskTitleAndDescriptionMissingError } from '@core/errors/errors/tasks-errors/task-title-and-description-missing-error'
import { TaskWithSameTitleError } from '@core/errors/errors/tasks-errors/task-with-same-title-error'
import { Task } from '@entities/task'
import { TasksRepository } from '@repositories/tasks-repository'

export interface UpdateTaskByIdUseCaseRequest {
  id: string
  title?: string
  description?: string
}

export type UpdateTaskByIdUseCaseResponse = Either<
  | TaskNotFoundError
  | TaskWithSameTitleError
  | TaskTitleAndDescriptionMissingError
  | TaskDescriptionLengthLongerThanPermittedError,
  {
    task: Task
  }
>

export class UpdateTaskByIdUseCase {
  constructor(private tasksRepository: TasksRepository) {}

  async execute(
    task: UpdateTaskByIdUseCaseRequest,
  ): Promise<UpdateTaskByIdUseCaseResponse> {
    const existingTask = await this.tasksRepository.findById(task.id)
    if (!existingTask) return left(new TaskNotFoundError()) // Se a task não existir, retornar erro

    if (!task.title && !task.description)
      return left(new TaskTitleAndDescriptionMissingError()) // Se nenhum campo for enviado, retornar a task atual

    if (task.title && existingTask.title !== task.title) {
      // Se a task existir, mas o título for diferente da task encontrada, verificar se o título já existe
      const existingTaskWithSameTitle = await this.tasksRepository.findByTitle(
        task.title,
      )
      if (existingTaskWithSameTitle) return left(new TaskWithSameTitleError()) // Se o título já existir, retornar erro
    }

    if (task.description && task.description.length > 255)
      return left(new TaskDescriptionLengthLongerThanPermittedError()) // Se a descrição for maior que 255 caracteres, retornar erro

    if (task.title) {
      existingTask.title = task.title // Atualizar o título
    }

    if (task.description) {
      existingTask.description = task.description // Atualizar a descrição
    }

    await this.tasksRepository.update(existingTask) // Atualiza a task

    return right({ task: existingTask }) // Se tudo certo, retornar a task atualizada
  }
}
