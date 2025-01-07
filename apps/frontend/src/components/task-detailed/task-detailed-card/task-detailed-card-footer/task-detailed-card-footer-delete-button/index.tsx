'use client'

import { TaskDeleteButton } from '@/components/task-delete-button'
import { useTaskDetailedContext } from '@/components/task-detailed/contexts/task-detailed-context'

import { TaskDetailedCardFooterDeleteButtonTrigger } from './task-detailed-card-footer-delete-button-trigger'

/**
 * ---
 *
 * ## TaskDetailedCardFooterDeleteButton
 *
 * Componente de botão de exclusão da tarefa detalhada. Exibe um botão que, ao ser clicado, exibe um diálogo para solicitar a confirmação da exclusão da tarefa.
 *
 * ---
 */
export function TaskDetailedCardFooterDeleteButton() {
  const context = useTaskDetailedContext()
  if (!context) return null

  return (
    <TaskDeleteButton
      task={context.task}
      buttonJSX={<TaskDetailedCardFooterDeleteButtonTrigger />}
    />
  )
}
