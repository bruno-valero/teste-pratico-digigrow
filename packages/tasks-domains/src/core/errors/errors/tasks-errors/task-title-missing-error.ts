import { UseCaseError } from '@core/errors/use-case-errors'

/**
 * ---
 *
 * ## TaskTitleMissingError
 *
 * É destinada para ser utilizada quando for necessária a obrigatoriedade de um título de tarefa, mas nenhum foi fornecido.
 *
 * ---
 */
export class TaskTitleMissingError extends Error implements UseCaseError {
  constructor() {
    super(`task not found.`)
  }
}
