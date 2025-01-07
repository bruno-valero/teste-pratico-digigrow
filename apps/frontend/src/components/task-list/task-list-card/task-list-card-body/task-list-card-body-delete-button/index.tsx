import { Trash } from 'lucide-react'

import { TaskDeleteButton } from '@/components/task-delete-button'
import { TaskListModel } from '@/components/task-list/contexts/task-list-context'

interface TaskListCardBodyDeleteButtonProps {
  task: TaskListModel[0]
}

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
