import { ComponentProps } from 'react'

import { Card, CardContent } from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'

import { TaskDetailedCardDescription } from './task-detailed-card-description'
import { TaskDetailedCardFooter } from './task-detailed-card-footer'
import { TaskDetailedCardHeader } from './task-detailed-card-header/task-detailed-card-header'
import { TaskDetailedCardTitle } from './task-detailed-card-title'
import { TaskDetailedCardWrapper } from './task-detailed-card-wrapper'

interface TaskDetailedCardProps extends ComponentProps<typeof Card> {}

/**
 * ---
 *
 * ## TaskDetailedCard
 *
 * Componente de tarefa detalhada. Exibe informações detalhadas sobre uma tarefa específica.
 *
 * ---
 *
 * @param ...CardProps - Propriedades adicionais para o componente Card.
 */
export function TaskDetailedCard(props: TaskDetailedCardProps) {
  return (
    <TaskDetailedCardWrapper {...props}>
      <TaskDetailedCardHeader />
      <div className="flex w-full flex-col items-center justify-center">
        <CardContent className="flex max-h-[20rem] min-h-[16rem] max-w-[600px] flex-col items-center justify-start gap-4 overflow-y-auto overflow-x-hidden max-sm:max-w-[95%]">
          <ScrollArea
            className="flex w-full flex-col items-center justify-start gap-4 pr-4"
            // scrollHideDelay={3000}
          >
            <TaskDetailedCardTitle />
            <TaskDetailedCardDescription />
          </ScrollArea>
        </CardContent>
      </div>
      <TaskDetailedCardFooter />
    </TaskDetailedCardWrapper>
  )
}
