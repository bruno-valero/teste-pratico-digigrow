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

/**
 * ---
 *
 * ## FindTaskByIdUseCase
 *
 * Contém a lógica e as regras de negócio para a busca de uma task por id.
 *
 * ---
 *
 * @param tasksRepository - Repository para a task. É obrigatório passar uma instância que do repositório que o SUT está configurado para usar.
 */
export class FindTaskByIdUseCase {
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
   * ## FindTaskByIdUseCase.execute
   *
   * Executa a lógica e as regras de negócio para a busca de uma task por id.
   *
   * ---
   *
   * @param task - Task para a busca. Deve possuir o id da task.
   * @returns - Uma promessa que resolve quando a task for buscada.
   */
  async execute(
    task: FindTaskByIdUseCaseRequest,
  ): Promise<FindTaskByIdUseCaseResponse> {
    const existingTask = await this.tasksRepository.findById(task.id)
    if (!existingTask) return left(new TaskNotFoundError()) // Se a task não existir, retornar erro

    return right({ task: existingTask }) // Se tudo certo, retornar a task
  }
}
