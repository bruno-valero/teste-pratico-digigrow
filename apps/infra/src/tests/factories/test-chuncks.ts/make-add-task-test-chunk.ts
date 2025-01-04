import { FuncArgs, makeTask } from '@digigrow/tasks-domains'
import { FastifyInstance } from 'fastify'
import request from 'supertest'

/**
 * ---
 *
 * ## Factory Function
 *
 * Destinada para o ambiente de testes. Cria um novo objeto de tarefa para ser testado, já fazendo os testes end-to-end necessários para a criação da tarefa.
 *
 * ---
 *
 * @param app - Fastify app
 * @param props - Propriedades do objeto a ser criado
 * @returns - Uma promessa que resolve quando o objeto for criado.
 */
export async function makeAddTaskTestChunk(
  app: FastifyInstance,
  props?: { id?: string; taskProps?: FuncArgs<typeof makeTask>[0] },
) {
  const data = makeTask(props?.taskProps, props?.id).toObject()
  const response = await request(app.server).post('/tasks').send(data)

  expect(response.status).toBe(201)
  expect(response.body).toEqual(
    expect.objectContaining({
      title: data.title,
      description: data.description,
    }),
  )

  return response
}
