import { Task } from '@digigrow/tasks-domains'
import z from 'zod'

export const taskPresenterBasicSchema = z.object({
  id: z.string().uuid(),
  title: z.string(),
  description: z.string(),
})

export const taskPresenterDetailedSchema = z.object({
  id: z.string().uuid(),
  title: z.string(),
  description: z.string(),
  createdAt: z.string(),
  updatedAt: z.string().nullable(),
})

export class TaskPresenter {
  static basic(task: Task) {
    return {
      id: task.id.value,
      title: task.title,
      description: task.description,
    }
  }

  static detailed(task: Task) {
    return {
      ...this.basic(task),
      createdAt: task.createdAt.toISOString(),
      updatedAt: task.updatedAt?.toISOString() ?? null,
    }
  }
}
