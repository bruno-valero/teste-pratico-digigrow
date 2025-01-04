import {
  TaskDescriptionLengthLongerThanPermittedError,
  TaskNotFoundError,
  TaskTitleAndDescriptionMissingError,
  TaskWithSameTitleError,
} from '@digigrow/tasks-domains'
import { makeUpdateTaskByIdUseCase } from '@factories/use-cases/make-update-task-by-id-use-case'
import { TaskPresenter } from '@presenters/task-presenter'
import {
  updateTaskByIdControllerBodySchema,
  updateTaskByIdControllerParamsSchema,
} from '@routes/task-routes-schemas'
import { FastifyReply, FastifyRequest } from 'fastify'

export async function updateTaskByIdController(
  req: FastifyRequest,
  res: FastifyReply,
) {
  const params = updateTaskByIdControllerParamsSchema.parse(req.params)
  const body = updateTaskByIdControllerBodySchema.parse(req.body)

  const useCase = makeUpdateTaskByIdUseCase()
  const response = await useCase.execute({ id: params.id, ...body })

  if (response.isLeft()) {
    if (response.value instanceof TaskTitleAndDescriptionMissingError) {
      res.status(400).send({ message: response.value.message })
    }
    if (response.value instanceof TaskNotFoundError) {
      res.status(404).send({ message: response.value.message })
    }
    if (response.value instanceof TaskWithSameTitleError) {
      res.status(409).send({ message: response.value.message })
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

    res.status(200).send(TaskPresenter.basic(task))
  }

  res.status(500).send({ message: 'Internal server error.' })
}
