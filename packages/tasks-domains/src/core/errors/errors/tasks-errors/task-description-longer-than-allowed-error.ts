import { UseCaseError } from '@core/errors/use-case-errors'

/**
 *
 * ---
 *
 * ## TaskDescriptionLengthLongerThanPermittedError
 *
 * É destinada para ser utilizada quando ocorrer um erro de validação de comprimento de descrição de tarefa.
 *
 * ---
 */
export class TaskDescriptionLengthLongerThanPermittedError
  extends Error
  implements UseCaseError
{
  constructor() {
    super(`task not found.`)
  }
}
