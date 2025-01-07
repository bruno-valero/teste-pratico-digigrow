import { ArrowLeft } from 'lucide-react'
import { ComponentProps } from 'react'

import { CardHeader } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

import { TaskDetailedCardHeaderButton } from './task-detailed-card-header-button'
import { TaskDetailedCardHeaderMetadata } from './task-detailed-card-header-metadata'

interface TaskDetailedCardHeaderProps
  extends ComponentProps<typeof CardHeader> {}

/**
 * ---
 *
 * ## TaskDetailedCardHeader
 *
 * Componente de cabeçalho do componente TaskDetailedCard. Exibe informações sobre a tarefa detalhada.
 *
 * ---
 *
 * @param ...CardHeaderProps - Propriedades adicionais para o componente CardHeader.
 */
export function TaskDetailedCardHeader(props: TaskDetailedCardHeaderProps) {
  return (
    <CardHeader {...props}>
      <TaskDetailedCardHeaderMetadata />
      <Separator />
      <div className="w-full p-4 max-sm:px-0 max-sm:py-4">
        <TaskDetailedCardHeaderButton>
          <ArrowLeft className="pointer-events-none min-h-5 min-w-5 max-sm:min-h-3 max-sm:min-w-3" />
        </TaskDetailedCardHeaderButton>
      </div>
    </CardHeader>
  )
}
