import { UseCaseError } from '@core/errors/use-case-errors'

export class TaskWithSameTitleError extends Error implements UseCaseError {
  constructor() {
    super(`Task with same title already exists`)
  }
}
