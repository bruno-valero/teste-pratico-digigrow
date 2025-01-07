import { Trash } from 'lucide-react'

import { TaskDeleteButton } from '@/components/task-delete-button'
import { TaskListModel } from '@/components/task-list/contexts/task-list-context'

interface TaskListCardBodyDeleteButtonProps {
  task: TaskListModel[0]
}

/**
 * ---
 *
 * ## TaskListCardBodyDeleteButton
 *
 * Componente de botão de exclusão do card de tarefa. Exibe um botão que, ao ser clicado, exibe um diálogo para solicitar a confirmação da exclusão da tarefa.
 *
 * ---
 *
 * @param props.task - Tarefa a ser excluída.
 * @returns
 */
export function TaskListCardBodyDeleteButton({
  task,
}: TaskListCardBodyDeleteButtonProps) {
  return (
    <TaskDeleteButton
      task={task}
      buttonJSX={<Trash className="pointer-events-none h-5 w-5" />}
    />
  )
}
