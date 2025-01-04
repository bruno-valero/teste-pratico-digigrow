import { UseCaseError } from '@core/errors/use-case-errors'

export class TaskNotFoundError extends Error implements UseCaseError {
  constructor() {
    super(`task not found.`)
  }
}
