import { TaskNotFoundError } from '@digigrow/tasks-domains'
import { makeFindTaskByIdUseCase } from '@factories/use-cases/make-find-task-by-id-use-case'
import { TaskPresenter } from '@presenters/task-presenter'
import { findTaskByIdControllerParamsSchema } from '@routes/task-routes-schemas'
import { FastifyReply, FastifyRequest } from 'fastify'

/**
 * ---
 *
 * ## findTaskByIdController
 *
 * É o controller responsável por buscar uma tarefa por id.
 *
 * ---
 *
 * @param req - Objeto do request HTTP
 * @param res - Objeto do response HTTP
 */
export async function findTaskByIdController(
  req: FastifyRequest,
  res: FastifyReply,
) {
  const params = findTaskByIdControllerParamsSchema.parse(req.params)

  const useCase = makeFindTaskByIdUseCase()
  const response = await useCase.execute(params)

  if (response.isLeft()) {
    if (response.value instanceof TaskNotFoundError) {
      res.status(404).send({ message: response.value.message })
    }
    res.status(400).send({ message: `bad request error` })
  }

  if (response.isRight()) {
    const { task } = response.value

    res.status(200).send(TaskPresenter.detailed(task))
  }

  res.status(500).send({ message: 'Internal server error.' })
}
