import {
  TaskDescriptionLengthLongerThanPermittedError,
  TaskDescriptionMissingError,
  TaskTitleMissingError,
  TaskWithSameTitleError,
} from '@digigrow/tasks-domains'
import { makeAddTaskUseCase } from '@factories/use-cases/make-add-task-use-case'
import { TaskPresenter } from '@presenters/task-presenter'
import { addTaskControllerBodySchema } from '@routes/task-routes-schemas'
import { FastifyReply, FastifyRequest } from 'fastify'

/**
 * ---
 *
 * ## addTaskController
 *
 * É o controller responsável por lidar com a criação de uma nova tarefa.
 *
 * ---
 *
 * @param req - Objeto do request HTTP
 * @param res - Objeto do response HTTP
 */
export async function addTaskController(
  req: FastifyRequest,
  res: FastifyReply,
) {
  const body = addTaskControllerBodySchema.parse(req.body)

  const useCase = makeAddTaskUseCase()
  const response = await useCase.execute(body)

  if (response.isLeft()) {
    if (response.value instanceof TaskWithSameTitleError) {
      res.status(409).send({ message: response.value.message })
    }
    if (response.value instanceof TaskTitleMissingError) {
      res.status(404).send({ message: response.value.message })
    }
    if (response.value instanceof TaskDescriptionMissingError) {
      res.status(404).send({ message: response.value.message })
    }
    if (
      response.value instanceof TaskDescriptionLengthLongerThanPermittedError
    ) {
      res.status(400).send({ message: response.value.message })
    }
    res.status(400).send({ message: `bad request error` })
  }

  if (response.isRight()) {
    const { task } = response.value

    res.status(201).send(TaskPresenter.detailed(task))
  }

  res.status(500).send({ message: 'Internal server error.' })
}
