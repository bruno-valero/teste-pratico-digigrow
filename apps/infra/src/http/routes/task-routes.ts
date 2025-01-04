import { addTaskController } from '@controllers/add-task-controller'
import { deleteTaskController } from '@controllers/delete-task-controller'
import { fetchAllTasksController } from '@controllers/fetch-all-tasks-controller'
import { findTaskByIdController } from '@controllers/find-task-by-id-controller'
import { updateTaskByIdController } from '@controllers/update-task-by-id-controller'
import { FastifyTypedInstance } from 'src/types'

import {
  addTaskControllerBodySchema,
  addTaskControllerResponseSchema,
  deleteTaskControllerParamsSchema,
  deleteTaskControllerResponseSchema,
  fetchAllTasksControllerResponseSchema,
  findTaskByIdControllerParamsSchema,
  findTaskByIdControllerResponseSchema,
  responseErrorSchema,
  updateTaskByIdControllerBodySchema,
  updateTaskByIdControllerParamsSchema,
  updateTaskByIdControllerResponseSchema,
} from './task-routes-schemas'

/**
 * ---
 * ## taskRoutes
 *
 * É um plugin customizado para o Fastify que adiciona as rotas de tarefas.
 *
 * ---
 *
 * @param app - Fastify app
 */
export async function taskRoutes(app: FastifyTypedInstance) {
  app.post(
    '/tasks',
    {
      schema: {
        description: 'Adiciona uma nova tarefa',
        tags: ['Tasks'],
        body: addTaskControllerBodySchema,
        response: {
          201: addTaskControllerResponseSchema,
          400: responseErrorSchema,
          404: responseErrorSchema,
          409: responseErrorSchema,
          500: responseErrorSchema,
        },
      },
    },
    addTaskController,
  )
  app.delete(
    '/tasks/:id',
    {
      schema: {
        description: 'Deleta uma tarefa',
        tags: ['Tasks'],
        params: deleteTaskControllerParamsSchema,
        response: {
          204: deleteTaskControllerResponseSchema,
          400: responseErrorSchema,
          404: responseErrorSchema,
          500: responseErrorSchema,
        },
      },
    },
    deleteTaskController,
  )
  app.get(
    '/tasks',
    {
      schema: {
        description: 'Lista todas as tarefas',
        tags: ['Tasks'],
        response: {
          200: fetchAllTasksControllerResponseSchema,
          400: responseErrorSchema,
          500: responseErrorSchema,
        },
      },
    },
    fetchAllTasksController,
  )
  app.get(
    '/tasks/:id',
    {
      schema: {
        description: 'Obtém uma tarefa por id',
        tags: ['Tasks'],
        params: findTaskByIdControllerParamsSchema,
        response: {
          200: findTaskByIdControllerResponseSchema,
          400: responseErrorSchema,
          404: responseErrorSchema,
          500: responseErrorSchema,
        },
      },
    },
    findTaskByIdController,
  )
  app.put(
    '/tasks/:id',
    {
      schema: {
        description: 'Atualiza uma tarefa',
        tags: ['Tasks'],
        params: updateTaskByIdControllerParamsSchema,
        body: updateTaskByIdControllerBodySchema,
        response: {
          200: updateTaskByIdControllerResponseSchema,
          400: responseErrorSchema,
          404: responseErrorSchema,
          409: responseErrorSchema,
          500: responseErrorSchema,
        },
      },
      errorHandler(error, req, res) {
        console.log('error -> "put" /tasks/:id')
        res.status(400).send({ message: error.message })
      },
    },
    updateTaskByIdController,
  )
}
