import { Task } from '@digigrow/tasks-domains'
import z from 'zod'

/**
 * ---
 *
 * ## taskPresenterBasicSchema
 *
 * É uma schema de validação para a representação básica de uma tarefa.
 *
 * ---
 */
export const taskPresenterBasicSchema = z.object({
  id: z.string().uuid(),
  title: z.string(),
  description: z.string(),
})

/**
 * ---
 *
 * ## taskPresenterDetailedSchema
 *
 * É uma schema de validação para a representação detalhada de uma tarefa.
 *
 * ---
 */
export const taskPresenterDetailedSchema = z.object({
  id: z.string().uuid(),
  title: z.string(),
  description: z.string(),
  createdAt: z.string(),
  updatedAt: z.string().nullable(),
})

/**
 * ---
 *
 * ## TaskPresenter
 *
 * É um objeto que armazena métodos para a representação de tarefas.
 *
 * ---
 */
export class TaskPresenter {
  /**
   * ---
   *
   * ## TaskPresenter.basic
   *
   * Representa uma tarefa básica.
   *
   * ---
   *
   * @param task - A tarefa a ser representada
   * @returns - Um objeto com as propriedades da tarefa
   */
  static basic(task: Task) {
    return {
      id: task.id.value,
      title: task.title,
      description: task.description,
    }
  }

  /**
   * ---
   *
   * ## TaskPresenter.detailed
   *
   * Representa uma tarefa detalhada.
   *
   * ---
   *
   * @param task - A tarefa a ser representada
   * @returns - Um objeto com as propriedades da tarefa
   */
  static detailed(task: Task) {
    return {
      ...this.basic(task),
      createdAt: task.createdAt.toISOString(),
      updatedAt: task.updatedAt?.toISOString() ?? null,
    }
  }
}
