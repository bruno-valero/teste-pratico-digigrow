import { makeFindAllTasksUseCase } from '@factories/use-cases/make-find-all-tasks-use-case'
import { TaskPresenter } from '@presenters/task-presenter'
import { FastifyReply, FastifyRequest } from 'fastify'

export async function fetchAllTasksController(
  req: FastifyRequest,
  res: FastifyReply,
) {
  const useCase = makeFindAllTasksUseCase()
  const response = await useCase.execute()

  if (response.isLeft()) {
    res.status(400).send({ message: `bad request error` })
  }

  if (response.isRight()) {
    const { tasks } = response.value

    res.status(200).send(tasks.map(TaskPresenter.basic))
  }

  res.status(500).send({ message: 'Internal server error.' })
}
