import { UseCaseError } from '@core/errors/use-case-errors'

/**
 * ---
 *
 * ## TaskWithSameTitleError
 *
 * É destinada para ser utilizada quando o sistema encontrar uma tarefa com o mesmo título.
 *
 * ---
 */
export class TaskWithSameTitleError extends Error implements UseCaseError {
  constructor() {
    super(`Task with same title already exists`)
  }
}
