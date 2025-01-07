import { Either, left, right } from '@core/either'
import { TaskDescriptionLengthLongerThanPermittedError } from '@core/errors/errors/tasks-errors/task-description-longer-than-allowed-error'
import { TaskDescriptionMissingError } from '@core/errors/errors/tasks-errors/task-description-missing-error'
import { TaskTitleMissingError } from '@core/errors/errors/tasks-errors/task-title-missing-error'
import { TaskWithSameTitleError } from '@core/errors/errors/tasks-errors/task-with-same-title-error'
import { Task } from '@entities/task'
import { TasksRepository } from '@repositories/tasks-repository'

export interface AddTaskUseCaseRequest {
  title: string
  description?: string
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

/**
 * ---
 *
 * ## AddTaskUseCase
 *
 * Contém a lógica e as regras de negócio para a criação de uma nova task.
 *
 * ---
 *
 * @param tasksRepository - Repository para a task. É obrigatório passar uma instância que do repositório que o SUT está configurado para usar.
 */
export class AddTaskUseCase {
  constructor(
    /**
     * ---
     *
     * ## tasksRepository
     *
     * Repository para a task. É obrigatório passar uma instância que do repositório que o SUT está configurado para usar.
     *
     * ---
     */
    private tasksRepository: TasksRepository,
  ) {}

  /**
   * ---
   *
   * ## AddTaskUseCase.execute
   *
   * Executa a lógica e as regras de negócio para a criação de uma nova task.
   *
   * ---
   *
   * @param task - Task para a nova task. Deve possuir título e descrição.
   * @returns - Uma promessa que resolve quando a task for criada.
   */
  async execute(task: AddTaskUseCaseRequest): Promise<AddTaskUseCaseResponse> {
    const existingTask = await this.tasksRepository.findByTitle(task.title)
    if (existingTask) return left(new TaskWithSameTitleError()) // Se existir uma task com o mesmo título, retornar erro

    const hasTitle = !!task.title.trim()
    const hasDescription = !!task.description?.trim()

    if (!hasTitle) return left(new TaskTitleMissingError()) // Se não tiver título, retornar erro
    if (!hasDescription) return left(new TaskDescriptionMissingError()) // Se não tiver descrição, retornar erro

    if (task.description && task.description.length > 255)
      return left(new TaskDescriptionLengthLongerThanPermittedError()) // Se a descrição for maior que 255 caracteres, retornar erro

    const newTask = Task.create({
      title: task.title,
      description: task.description ?? '',
    })
    const savedTask = await this.tasksRepository.create(newTask) // Se tudo certo, salvar a task

    return right({ task: savedTask }) // Se tudo certo, retornar a task salva
  }
}
