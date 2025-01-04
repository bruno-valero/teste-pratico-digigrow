import { FastifyInstance } from 'fastify'
import request from 'supertest'

/**
 * ---
 *
 * ## Factory Function
 *
 * Destinada para o ambiente de testes. Busca todas as tarefas e realiza os testes end-to-end necessários para a busca de todas as tarefas.
 *
 * ---
 *
 * @param app - Fastify app
 * @param shouldHaveLength - O número de tarefas esperado na resposta
 * @returns - Uma promessa que resolve quando a tarefa for criada.
 */
export async function makeFetchAllTasksTestChunk(
  app: FastifyInstance,
  shouldHaveLength?: number,
) {
  const response = await request(app.server).get('/tasks')

  expect(response.status).toBe(200)
  expect(response.body).length(shouldHaveLength ?? 3)

  return response
}
