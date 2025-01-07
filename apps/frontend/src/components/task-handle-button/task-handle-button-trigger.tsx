'use client'

import { ComponentProps } from 'react'

import { DialogTrigger } from '@/components/ui/dialog'

import { useTaskHandleDialogContext } from './contexts/task-handle-context'

interface TaskHandleButtonTriggerProps
  extends ComponentProps<typeof DialogTrigger> {
  buttonJSX: JSX.Element
}

/**
 * ---
 *
 * ## TaskHandleButtonTrigger
 *
 * Componente de trigger do botão de edição ou criação de tarefa. Ao clicar no botão, um diálogo é exibido para solicitar a confirmação da ação.
 *
 * ---
 *
 * @param props.buttonJSX - Elemento JSX para renderização do botão.
 * @param ...DialogTriggerProps - Propriedades adicionais para o componente DialogTrigger.
 */
export function TaskHandleButtonTrigger(props: TaskHandleButtonTriggerProps) {
  const state = useTaskHandleDialogContext()

  return (
    <DialogTrigger {...props} ref={state?.refs.dialogTriggerRef} asChild>
      {props.buttonJSX}
    </DialogTrigger>
  )
}
