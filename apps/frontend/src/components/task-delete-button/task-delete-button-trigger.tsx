import { ComponentProps } from 'react'

import { DialogTrigger } from '@/components/ui/dialog'

interface TaskDeleteButtonTriggerProps
  extends ComponentProps<typeof DialogTrigger> {
  buttonJSX: JSX.Element
}

/**
 * ---
 *
 * ## TaskDeleteButtonTrigger
 *
 * Componente de trigger do botão de exclusão de tarefa. Recebe o elemento JSX do botão e renderiza o mesmo.
 *
 * ---
 *
 * @param props.buttonJSX - Elemento JSX para renderização do botão.
 * @returns
 */
export function TaskDeleteButtonTrigger(props: TaskDeleteButtonTriggerProps) {
  return (
    <DialogTrigger {...props} asChild>
      {props.buttonJSX}
    </DialogTrigger>
  )
}
