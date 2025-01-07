'use client'

import { ComponentProps } from 'react'

import { CardTitle } from '@/components/ui/card'

import { useTaskDetailedContext } from '../contexts/task-detailed-context'

interface TaskDetailedCardTitleProps extends ComponentProps<typeof CardTitle> {}

/**
 * ---
 *
 * ## TaskDetailedCardTitle
 *
 * Componente de título da tarefa detalhada. Exibe o título da tarefa.
 *
 * ---
 *
 * @param ...CardTitleProps - Propriedades adicionais para o componente CardTitle.
 */
export function TaskDetailedCardTitle(props: TaskDetailedCardTitleProps) {
  const context = useTaskDetailedContext()
  if (!context) return null

  return (
    <div className="m-auto mb-6 flex items-center justify-center self-center border-b-2 px-8 pb-1">
      <CardTitle className="text-center max-sm:text-lg" {...props}>
        {context.task.title}
      </CardTitle>
    </div>
  )
}
