import { TaskNotFoundError } from '@digigrow/tasks-domains'
import { makeDeleteTaskByIdUseCase } from '@factories/use-cases/make-delete-task-by-id-use-case'
import { deleteTaskControllerParamsSchema } from '@routes/task-routes-schemas'
import { FastifyReply, FastifyRequest } from 'fastify'

export async function deleteTaskController(
  req: FastifyRequest,
  res: FastifyReply,
) {
  const params = deleteTaskControllerParamsSchema.parse(req.params)

  const useCase = makeDeleteTaskByIdUseCase()
  const response = await useCase.execute(params)

  if (response.isLeft()) {
    if (response.value instanceof TaskNotFoundError) {
      res.status(404).send({ message: response.value.message })
    }
    res.status(400).send({ message: `bad request error` })
  }

  if (response.isRight()) {
    res.status(204).send(null)
  }

  res.status(500).send({ message: 'Internal server error.' })
}
