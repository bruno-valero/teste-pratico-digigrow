import { UseCaseError } from '@core/errors/use-case-errors'

/**
 * ---
 *
 * ## TaskNotFoundError
 *
 * É destinada para ser utilizada quando o sistema não encontrar uma tarefa.
 *
 * ---
 */
export class TaskNotFoundError extends Error implements UseCaseError {
  constructor() {
    super(`task not found.`)
  }
}
