import { env } from '@/env'

import { TaskDetailedProvider } from './contexts/task-detailed-context'
import { TaskDetailedCard } from './task-detailed-card'

export type TaskDetailedModel = {
  title: string
  description: string
  id: string
  createdAt: string
  updatedAt: string
}

interface TaskDetailedProps {
  taskId: string
}

/**
 * ---
 *
 * ## TaskDetailed
 *
 * Componente de tarefa detalhada. Exibe informações detalhadas sobre uma tarefa específica.
 *
 * ---
 *
 * @param props.taskId - ID da tarefa a ser exibida.
 */
export async function TaskDetailed({ taskId }: TaskDetailedProps) {
  const taskResponse = await fetch(`${env.API_URL}/tasks/${taskId}`)
  const taskData = (await taskResponse.json()) as TaskDetailedModel
  const task: TaskDetailedModel = taskData

  return (
    <TaskDetailedProvider task={task}>
      <TaskDetailedCard />
    </TaskDetailedProvider>
  )
}
