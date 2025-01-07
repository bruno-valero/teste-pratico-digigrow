'use client'

import { useTaskDetailedContext } from '@/components/task-detailed/contexts/task-detailed-context'
import { TaskHandleButton } from '@/components/task-handle-button'

import { TaskDetailedCardFooterEditButtonJSX } from './task-detailed-card-footer-edit-button-jsx'

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
