'use client'

import { useTaskDetailedContext } from '@/components/task-detailed/contexts/task-detailed-context'
import { TaskHandleButton } from '@/components/task-handle-button'

import { TaskDetailedCardFooterEditButtonJSX } from './task-detailed-card-footer-edit-button-jsx'

/**
 * ---
 *
 * ## TaskDetailedCardFooterEditButton
 *
 * Componente de botão de edição da tarefa detalhada. Exibe um botão que, ao ser clicado, exibe um diálogo para solicitar a confirmação da edição da tarefa.
 *
 * ---
 *
 */
export function TaskDetailedCardFooterEditButton() {
  const context = useTaskDetailedContext()
  if (!context) return null

  return (
    <TaskHandleButton
      task={context.task}
      type="edit"
      buttonJSX={<TaskDetailedCardFooterEditButtonJSX />}
    />
  )
}
