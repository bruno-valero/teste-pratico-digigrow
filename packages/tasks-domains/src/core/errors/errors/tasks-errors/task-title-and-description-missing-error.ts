import { UseCaseError } from '@core/errors/use-case-errors'

export class TaskTitleAndDescriptionMissingError
  extends Error
  implements UseCaseError
{
  constructor() {
    super(`title or description must be provided.`)
  }
}
