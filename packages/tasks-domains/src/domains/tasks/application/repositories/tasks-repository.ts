import { Task } from '@entities/task'

/**
 * ---
 *
 * ## TasksRepository
 *
 * É destinada para ser utilizada como interface para a respositoria de tarefas.
 *
 * ---
 */
export interface TasksRepository {
  /**
   * ---
   *
   * ## TasksRepository.findAll
   *
   * Busca todas as tasks.
   *
   * ---
   *
   * @returns - Uma promessa que resolve com todas as tasks.
   */
  findAll(): Promise<Task[]>
  /**
   * ---
   *
   * ## TasksRepository.findById
   *
   * Busca uma task por id.
   *
   * ---
   *
   * @param id - ID da task a ser buscada.
   * @returns - Uma promessa que resolve com a task buscada ou null se não existir.
   */
  findById(id: string): Promise<Task | null>
  /**
   * ---
   *
   * ## TasksRepository.findByTitle
   *
   * Busca uma task por título.
   *
   * ---
   *
   * @param title - Título da task a ser buscada.
   * @returns - Uma promessa que resolve com a task buscada ou null se não existir.
   */
  findByTitle(title: string): Promise<Task | null>
  /**
   * ---
   *
   * ## TasksRepository.create
   *
   * Cria uma task.
   *
   * ---
   *
   * @param task - Task a ser criada.
   * @returns - Uma promessa que resolve com a task criada.
   */
  create(task: Task): Promise<Task>
  /**
   * ---
   *
   * ## TasksRepository.update
   *
   * Atualiza uma task.
   *
   * ---
   *
   * @param task - Task a ser atualizada.
   * @returns - Uma promessa que resolve com a task atualizada.
   */
  update(task: Task): Promise<Task>
  /**
   * ---
   *
   * ## TasksRepository.delete
   *
   * Exclui uma task.
   *
   * ---
   *
   * @param task - Task a ser excluída.
   * @returns - Uma promessa que resolve com a task excluída.
   */
  delete(task: Task): Promise<Task>
}
