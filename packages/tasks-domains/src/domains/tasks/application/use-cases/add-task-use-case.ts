import { Either, left, right } from '@core/either'
import { TaskDescriptionLengthLongerThanPermittedError } from '@core/errors/errors/tasks-errors/task-description-longer-than-allowed-error'
import { TaskDescriptionMissingError } from '@core/errors/errors/tasks-errors/task-description-missing-error'
import { TaskTitleMissingError } from '@core/errors/errors/tasks-errors/task-title-missing-error'
import { TaskWithSameTitleError } from '@core/errors/errors/tasks-errors/task-with-same-title-error'
import { Task } from '@entities/task'
import { TasksRepository } from '@repositories/tasks-repository'

export interface AddTaskUseCaseRequest {
  title: string
  description: string
}

export type AddTaskUseCaseResponse = Either<
  | TaskWithSameTitleError
  | TaskTitleMissingError
  | TaskDescriptionMissingError
  | TaskDescriptionLengthLongerThanPermittedError,
  {
    task: Task
  }
>

export class AddTaskUseCase {
  constructor(private tasksRepository: TasksRepository) {}

  async execute(task: AddTaskUseCaseRequest): Promise<AddTaskUseCaseResponse> {
    const existingTask = await this.tasksRepository.findByTitle(task.title)
    if (existingTask) return left(new TaskWithSameTitleError()) // Se existir uma task com o mesmo título, retornar erro

    const hasTitle = !!task.title
    const hasDescription = !!task.description

    if (!hasTitle) return left(new TaskTitleMissingError()) // Se não tiver título, retornar erro
    if (!hasDescription) return left(new TaskDescriptionMissingError()) // Se não tiver descrição, retornar erro

    if (task.description.length > 255)
      return left(new TaskDescriptionLengthLongerThanPermittedError()) // Se a descrição for maior que 255 caracteres, retornar erro

    const newTask = Task.create({
      title: task.title,
      description: task.description,
    })
    const savedTask = await this.tasksRepository.create(newTask) // Se tudo certo, salvar a task

    return right({ task: savedTask }) // Se tudo certo, retornar a task salva
  }
}
