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

/**
 * ---
 *
 * ## FindAllTasksUseCase
 *
 * Contém a lógica e as regras de negócio para a busca de todas as tasks.
 *
 * ---
 *
 * @param tasksRepository - Repository para a task. É obrigatório passar uma instância que do repositório que o SUT está configurado para usar.
 */
export class FindAllTasksUseCase {
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
   * ## FindAllTasksUseCase.execute
   *
   * Executa a lógica e as regras de negócio para a busca de todas as tasks.
   *
   * ---
   *
   * @returns - Uma promessa que resolve quando todas as tasks forem buscadas.
   */
  async execute(): Promise<FindAllTasksUseCaseResponse> {
    const tasks = await this.tasksRepository.findAll() // Buscar todas as tasks

    return right({ tasks }) // Se tudo certo, retornar as tasks
  }
}
