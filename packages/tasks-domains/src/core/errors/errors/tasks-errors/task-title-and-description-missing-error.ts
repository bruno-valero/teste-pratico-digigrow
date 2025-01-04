import { UseCaseError } from '@core/errors/use-case-errors'

/**
 * ---
 *
 * ## TaskTitleAndDescriptionMissingError
 *
 * É destinada para ser utilizada quando for necessária a obrigatoriedade de um título e descrição de tarefa, mas nenhum deles foi fornecido.
 *
 * ---
 */
export class TaskTitleAndDescriptionMissingError
  extends Error
  implements UseCaseError
{
  constructor() {
    super(`title or description must be provided.`)
  }
}
