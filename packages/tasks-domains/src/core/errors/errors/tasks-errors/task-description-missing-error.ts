import { UseCaseError } from '@core/errors/use-case-errors'

export class TaskDescriptionMissingError extends Error implements UseCaseError {
  constructor() {
    super(`task not found.`)
  }
}
