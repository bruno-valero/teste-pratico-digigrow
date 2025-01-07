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

/**
 * ---
 *
 * ## TaskHandleButton
 *
 * Componente de botão de edição ou criação de tarefa. Ao clicar no botão, um diálogo é exibido para solicitar a confirmação da ação.
 *
 * ---
 *
 * @param props.task - Tarefa a ser editada ou criada.
 * @param props.type - Tipo de ação a ser realizada. Pode ser 'edit' ou 'create'.
 * @param props.buttonJSX - Elemento JSX para renderização do botão.
 * @returns
 */
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
