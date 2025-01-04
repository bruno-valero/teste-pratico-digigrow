import { TaskTitleAndDescriptionMissingError } from '@digigrow/tasks-domains'
import {
  taskPresenterBasicSchema,
  taskPresenterDetailedSchema,
} from '@presenters/task-presenter'
import z from 'zod'

/**
 * ---
 *
 * ## responseErrorSchema
 *
 * É uma schema de validação para a representação de erros de resposta.
 *
 * ---
 */
export const responseErrorSchema = z.object({
  message: z.string(),
})
/**
 * ---
 *
 * ## ResponseErrorSchema
 *
 * É o tipo de dados retornado pelo controller de erros de resposta.
 *
 * ---
 */
export type ResponseErrorSchema = z.infer<typeof responseErrorSchema>

/**
 * ---
 *
 * ## addTaskControllerBodySchema
 *
 * É uma schema de validação para a representação do corpo da requisição de adição de uma tarefa.
 *
 * ---
 */
export const addTaskControllerBodySchema = z.object({
  title: z.string().min(1),
  description: z.string().max(255).optional(),
})
/**
 * ---
 *
 * ## AddTaskControllerBodySchema
 *
 * É o tipo de dados retornado pelo controller de adição de uma tarefa.
 *
 * ---
 */
export type AddTaskControllerBodySchema = z.infer<
  typeof addTaskControllerBodySchema
>

/**
 * ---
 *
 * ## addTaskControllerResponseSchema
 *
 * É uma schema de validação para a representação da resposta de adição de uma tarefa.
 *
 * ---
 */
export const addTaskControllerResponseSchema = taskPresenterBasicSchema
/**
 * ---
 *
 * ## AddTaskControllerResponseSchema
 *
 * É o tipo de dados retornado pelo controller de adição de uma tarefa.
 *
 * ---
 */
export type AddTaskControllerResponseSchema = z.infer<
  typeof addTaskControllerResponseSchema
>

/**
 * ---
 *
 * ## deleteTaskControllerParamsSchema
 *
 * É uma schema de validação para a representação dos parâmetros da requisição de exclusão de uma tarefa.
 *
 * ---
 */
export const deleteTaskControllerParamsSchema = z.object({
  id: z.string().uuid(),
})
/**
 * ---
 *
 * ## DeleteTaskControllerParamsSchema
 *
 * É o tipo de dados retornado pelo controller de exclusão de uma tarefa.
 *
 * ---
 */
export type DeleteTaskControllerParamsSchema = z.infer<
  typeof deleteTaskControllerParamsSchema
>

/**
 * ---
 *
 * ## deleteTaskControllerResponseSchema
 *
 * É uma schema de validação para a representação da resposta de exclusão de uma tarefa.
 *
 * ---
 */
export const deleteTaskControllerResponseSchema = z.null()
/**
 * ---
 *
 * ## DeleteTaskControllerResponseSchema
 *
 * É o tipo de dados retornado pelo controller de exclusão de uma tarefa.
 *
 * ---
 */
export type DeleteTaskControllerResponseSchema = z.infer<
  typeof deleteTaskControllerResponseSchema
>

/**
 * ---
 *
 * ## fetchAllTasksControllerResponseSchema
 *
 * É uma schema de validação para a representação da resposta de busca de todas as tarefas.
 *
 * ---
 */
export const fetchAllTasksControllerResponseSchema = z.array(
  taskPresenterBasicSchema,
)
/**
 * ---
 *
 * ## FetchAllTasksControllerResponseSchema
 *
 * É o tipo de dados retornado pelo controller de busca de todas as tarefas.
 *
 */
export type FetchAllTasksControllerResponseSchema = z.infer<
  typeof fetchAllTasksControllerResponseSchema
>

/**
 * ---
 *
 * ## findTaskByIdControllerParamsSchema
 *
 * É uma schema de validação para a representação dos parâmetros da requisição de busca de uma tarefa por id.
 *
 * ---
 */
export const findTaskByIdControllerParamsSchema = z.object({
  id: z.string().uuid(),
})
/**
 * ---
 *
 * ## FindTaskByIdControllerParamsSchema
 *
 * É o tipo de dados retornado pelo controller de busca de uma tarefa por id.
 *
 * ---
 */
export type FindTaskByIdControllerParamsSchema = z.infer<
  typeof findTaskByIdControllerParamsSchema
>

/**
 * ---
 *
 * ## findTaskByIdControllerResponseSchema
 *
 * É uma schema de validação para a representação da resposta de busca de uma tarefa por id.
 *
 * ---
 */
export const findTaskByIdControllerResponseSchema = taskPresenterDetailedSchema
/**
 * ---
 *
 * ## FindTaskByIdControllerResponseSchema
 *
 * É o tipo de dados retornado pelo controller de busca de uma tarefa por id.
 *
 * ---
 */
export type FindTaskByIdControllerResponseSchema = z.infer<
  typeof findTaskByIdControllerResponseSchema
>

/**
 * ---
 *
 * ## updateTaskByIdControllerParamsSchema
 *
 * É uma schema de validação para a representação dos parâmetros da requisição de atualização de uma tarefa por id.
 *
 * ---
 */
export const updateTaskByIdControllerParamsSchema = z.object({
  id: z.string().uuid(),
})
/**
 * ---
 *
 * ## UpdateTaskByIdControllerParamsSchema
 *
 * É o tipo de dados retornado pelo controller de atualização de uma tarefa por id.
 *
 * ---
 */
export type UpdateTaskByIdControllerParamsSchema = z.infer<
  typeof updateTaskByIdControllerParamsSchema
>

/**
 * ---
 *
 * ## updateTaskByIdControllerBodySchema
 *
 * É uma schema de validação para a representação do corpo da requisição de atualização de uma tarefa por id.
 *
 * ---
 */
export const updateTaskByIdControllerBodySchema = z
  .object({
    title: z.string().min(1).optional(),
    description: z.string().max(255).optional(),
  })
  .refine((data) => data.title || data.description, {
    message: new TaskTitleAndDescriptionMissingError().message,
  })
/**
 * ---
 *
 * ## UpdateTaskByIdControllerBodySchema
 *
 * É o tipo de dados retornado pelo controller de atualização de uma tarefa por id.
 *
 * ---
 */
export type UpdateTaskByIdControllerBodySchema = z.infer<
  typeof updateTaskByIdControllerBodySchema
>

/**
 * ---
 *
 * ## updateTaskByIdControllerResponseSchema
 *
 * É uma schema de validação para a representação da resposta de atualização de uma tarefa por id.
 *
 * ---
 */
export const updateTaskByIdControllerResponseSchema = taskPresenterBasicSchema
/**
 * ---
 *
 * ## UpdateTaskByIdControllerResponseSchema
 *
 * É o tipo de dados retornado pelo controller de atualização de uma tarefa por id.
 *
 * ---
 */
export type UpdateTaskByIdControllerResponseSchema = z.infer<
  typeof updateTaskByIdControllerResponseSchema
>
