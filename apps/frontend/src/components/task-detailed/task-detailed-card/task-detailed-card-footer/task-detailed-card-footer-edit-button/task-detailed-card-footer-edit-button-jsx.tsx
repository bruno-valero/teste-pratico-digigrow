import { Edit } from 'lucide-react'
import { ComponentProps } from 'react'

import { Button } from '@/components/ui/button'

interface TaskDetailedCardFooterEditButtonJSXProps
  extends ComponentProps<typeof Button> {}

/**
 * ---
 *
 * ## TaskDetailedCardFooterEditButtonJSX
 *
 * Componente de botão de edição da tarefa detalhada. Exibe um botão que, ao ser clicado, exibe um diálogo para solicitar a confirmação da edição da tarefa.
 *
 * ---
 *
 * @param ...ButtonProps - Propriedades adicionais para o componente Button.
 */
export function TaskDetailedCardFooterEditButtonJSX(
  props: TaskDetailedCardFooterEditButtonJSXProps,
) {
  return (
    <Button
      variant={'secondary'}
      className="flex items-center justify-center gap-2 px-7 py-4"
      {...props}
    >
      <Edit className="pointer-events-none h-6 w-6" />
      <span className="text-mg font-normal">Editar</span>
    </Button>
  )
}
