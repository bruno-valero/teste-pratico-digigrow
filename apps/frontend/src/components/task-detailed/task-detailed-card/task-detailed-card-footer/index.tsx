import { ComponentProps } from 'react'

import { CardFooter } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

import { TaskDetailedCardFooterDeleteButton } from './task-detailed-card-footer-delete-button'
import { TaskDetailedCardFooterEditButton } from './task-detailed-card-footer-edit-button'

interface TaskDetailedCardFooterProps
  extends ComponentProps<typeof CardFooter> {}

/**
 * ---
 *
 * ## TaskDetailedCardFooter
 *
 * Componente de rodapé do componente TaskDetailedCard. Exibe botões de edição e exclusão da tarefa detalhada.
 *
 * ---
 *
 * @param ...CardFooterProps - Propriedades adicionais para o componente CardFooter.
 */
export function TaskDetailedCardFooter(props: TaskDetailedCardFooterProps) {
  return (
    <CardFooter
      className="mt-3 flex flex-col items-center justify-start gap-4 p-4"
      {...props}
    >
      <Separator />
      <div className="flex w-[70%] items-center justify-around py-4 max-sm:w-full">
        <TaskDetailedCardFooterEditButton />
        <TaskDetailedCardFooterDeleteButton />
      </div>
    </CardFooter>
  )
}
