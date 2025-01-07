import { TaskListModel } from '../contexts/task-list-context'
import { TaskListCardBody } from './task-list-card-body'
import { TaskListCardWrapper } from './task-list-card-wrapper'

interface TaskListCardProps {
  task: TaskListModel[0]
}

/**
 * ---
 *
 * ## TaskListCard
 *
 * Componente de card de tarefa. Exibe informações detalhadas sobre uma tarefa específica.
 *
 * ---
 *
 * @param props.task - Tarefa a ser exibida no card.
 * @returns
 */
export function TaskListCard({ task }: TaskListCardProps) {
  return (
    <TaskListCardWrapper taskId={task.id}>
      <TaskListCardBody task={task} />
    </TaskListCardWrapper>
  )
}
