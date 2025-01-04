import { TaskTitleAndDescriptionMissingError } from '@digigrow/tasks-domains'
import {
  taskPresenterBasicSchema,
  taskPresenterDetailedSchema,
} from '@presenters/task-presenter'
import z from 'zod'

export const responseErrorSchema = z.object({
  message: z.string(),
})
export type ResponseErrorSchema = z.infer<typeof responseErrorSchema>

export const addTaskControllerBodySchema = z.object({
  title: z.string().min(1),
  description: z.string().max(255).optional(),
})
export type AddTaskControllerBodySchema = z.infer<
  typeof addTaskControllerBodySchema
>

export const addTaskControllerResponseSchema = taskPresenterBasicSchema
export type AddTaskControllerResponseSchema = z.infer<
  typeof addTaskControllerResponseSchema
>

export const deleteTaskControllerParamsSchema = z.object({
  id: z.string().uuid(),
})
export type DeleteTaskControllerParamsSchema = z.infer<
  typeof deleteTaskControllerParamsSchema
>

export const deleteTaskControllerResponseSchema = z.null()
export type DeleteTaskControllerResponseSchema = z.infer<
  typeof deleteTaskControllerResponseSchema
>

export const fetchAllTasksControllerResponseSchema = z.array(
  taskPresenterBasicSchema,
)
export type FetchAllTasksControllerResponseSchema = z.infer<
  typeof fetchAllTasksControllerResponseSchema
>

export const findTaskByIdControllerParamsSchema = z.object({
  id: z.string().uuid(),
})
export type FindTaskByIdControllerParamsSchema = z.infer<
  typeof findTaskByIdControllerParamsSchema
>

export const findTaskByIdControllerResponseSchema = taskPresenterDetailedSchema
export type FindTaskByIdControllerResponseSchema = z.infer<
  typeof findTaskByIdControllerResponseSchema
>

export const updateTaskByIdControllerParamsSchema = z.object({
  id: z.string().uuid(),
})
export type UpdateTaskByIdControllerParamsSchema = z.infer<
  typeof updateTaskByIdControllerParamsSchema
>

export const updateTaskByIdControllerBodySchema = z
  .object({
    title: z.string().min(1).optional(),
    description: z.string().max(255).optional(),
  })
  .refine((data) => data.title || data.description, {
    message: new TaskTitleAndDescriptionMissingError().message,
  })
export type UpdateTaskByIdControllerBodySchema = z.infer<
  typeof updateTaskByIdControllerBodySchema
>

export const updateTaskByIdControllerResponseSchema = taskPresenterBasicSchema
export type UpdateTaskByIdControllerResponseSchema = z.infer<
  typeof updateTaskByIdControllerResponseSchema
>
