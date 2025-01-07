import { Trash } from 'lucide-react'
import { ComponentProps } from 'react'

import { Button } from '@/components/ui/button'

interface TaskDetailedCardFooterDeleteButtonTriggerProps
  extends ComponentProps<typeof Button> {}

/**
 * ---
 *
 * ## TaskDetailedCardFooterDeleteButtonTrigger
 *
 * Componente de trigger do botão de exclusão da tarefa detalhada. Exibe um botão que, ao ser clicado, exibe um diálogo para solicitar a confirmação da exclusão da tarefa.
 *
 * ---
 *
 * @param ...ButtonProps - Propriedades adicionais para o componente Button.
 */
export function TaskDetailedCardFooterDeleteButtonTrigger(
  props: TaskDetailedCardFooterDeleteButtonTriggerProps,
) {
  return (
    <Button
      variant={'destructive'}
      className="flex items-center justify-center gap-2 px-6 py-4"
      {...props}
    >
      <Trash className="pointer-events-none h-6 w-6" />
      <span className="text-mg font-normal">Excluir</span>
    </Button>
  )
}
