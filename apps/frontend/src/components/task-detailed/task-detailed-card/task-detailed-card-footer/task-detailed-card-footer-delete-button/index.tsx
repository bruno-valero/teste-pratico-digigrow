'use client'

import { TaskDeleteButton } from '@/components/task-delete-button'
import { useTaskDetailedContext } from '@/components/task-detailed/contexts/task-detailed-context'

import { TaskDetailedCardFooterDeleteButtonTrigger } from './task-detailed-card-footer-delete-button-trigger'

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
