import { UseCaseError } from '@core/errors/use-case-errors'

/**
 * ---
 *
 * ## TaskDescriptionMissingError
 *
 * É destinada para ser utilizada quando for necessária a obrigatoriedade de uma descrição de tarefa, mas nenhuma foi fornecida.
 *
 * ---
 */
export class TaskDescriptionMissingError extends Error implements UseCaseError {
  constructor() {
    super(`task not found.`)
  }
}
