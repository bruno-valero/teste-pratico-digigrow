'use client'

import { ComponentProps } from 'react'

import { CardDescription } from '@/components/ui/card'

import { useTaskDetailedContext } from '../contexts/task-detailed-context'

interface TaskDetailedCardDescriptionProps
  extends ComponentProps<typeof CardDescription> {}

export function TaskDetailedCardDescription(
  props: TaskDetailedCardDescriptionProps,
) {
  const context = useTaskDetailedContext()
  if (!context) return null

  return (
    <CardDescription className="w-full text-wrap text-start" {...props}>
      {context.task.description
        .split('\n')
        .map((line, index) =>
          line.length > 0 ? <p key={index}>{line}</p> : <br key={index} />,
        )}
    </CardDescription>
  )
}
