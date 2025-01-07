import { ComponentProps } from 'react'

import { TaskListModel } from './contexts/task-list-context'
import { TaskListCard } from './task-list-card'

interface TaskListArrayProps extends ComponentProps<'div'> {
  tasks: TaskListModel
}

/**
 * ---
 *
 * ## TaskListArray
 *
 * Componente de array de tarefas. Exibe uma lista de tarefas cadastradas no sistema.
 *
 * ---
 *
 * @param props.tasks - Tarefas a serem exibidas no array.
 * @param ...divProps - Propriedades adicionais para o componente div.
 * @returns
 */
export function TaskListArray({ tasks, ...props }: TaskListArrayProps) {
  return (
    <div
      className="grid w-full items-stretch justify-start gap-4 p-4 max-md:grid-cols-1 max-md:p-1 max-sm:justify-center md:grid-cols-2"
      {...props}
    >
      {tasks.map((task) => (
        <TaskListCard key={task.id} task={task} />
      ))}
    </div>
  )
}
