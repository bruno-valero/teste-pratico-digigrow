import { Either, left, right } from '@core/either'
import { TaskNotFoundError } from '@core/errors/errors/tasks-errors/task-not-found-error'
import { TasksRepository } from '@repositories/tasks-repository'

export interface DeleteTaskByIdUseCaseRequest {
  id: string
}

export type DeleteTaskByIdUseCaseResponse = Either<TaskNotFoundError, null>

/**
 * ---
 *
 * ## DeleteTaskByIdUseCase
 *
 * Contém a lógica e as regras de negócio para a exclusão de uma task.
 *
 * ---
 *
 * @param tasksRepository - Repository para a task. É obrigatório passar uma instância que do repositório que o SUT está configurado para usar.
 */
export class DeleteTaskByIdUseCase {
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
   * ## DeleteTaskByIdUseCase.execute
   *
   * Executa a lógica e as regras de negócio para a exclusão de uma task.
   *
   * ---
   *
   * @param task - Task para a exclusão. Deve possuir o id da task.
   * @returns - Uma promessa que resolve quando a task for excluída.
   */
  async execute(
    task: DeleteTaskByIdUseCaseRequest,
  ): Promise<DeleteTaskByIdUseCaseResponse> {
    const existingTask = await this.tasksRepository.findById(task.id)
    if (!existingTask) return left(new TaskNotFoundError()) // Se a task não existir, retornar erro

    await this.tasksRepository.delete(existingTask) // Se tudo certo, deletar a task

    return right(null) // Se tudo certo, retornar null
  }
}
