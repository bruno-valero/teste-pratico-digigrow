import { TaskListModel } from '../task-list/contexts/task-list-context'
import { TaskHandleDialogProvider } from './contexts/task-handle-context'
import { TaskHandleButtonDialogContent } from './task-handle-button-dialog-content'
import { TaskHandleButtonTrigger } from './task-handle-button-trigger'

export type TaskHandleButtonType = 'edit' | 'create'

interface TaskHandleButtonProps {
  task?: TaskListModel[0]
  type: TaskHandleButtonType
  buttonJSX: JSX.Element
}

export function TaskHandleButton({
  task,
  type,
  buttonJSX,
}: TaskHandleButtonProps) {
  task = task ?? {
    id: '',
    title: '',
    description: '',
  }

  return (
    <TaskHandleDialogProvider task={task} type={type}>
      <TaskHandleButtonTrigger buttonJSX={buttonJSX} />
      <TaskHandleButtonDialogContent />
    </TaskHandleDialogProvider>
  )
}
