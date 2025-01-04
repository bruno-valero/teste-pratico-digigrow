import { UseCaseError } from '@core/errors/use-case-errors'

/**
 *
 * ---
 *
 * ## DataValidationError
 *
 * É destinada para ser utilizada quando ocorrer algum erro de validação de dados.
 *
 * ---
 *
 * @param message - Mensagem de erro.
 */
export class DataValidationError extends Error implements UseCaseError {
  constructor(message: string) {
    super(`data is not valid ${message}`)
  }
}
