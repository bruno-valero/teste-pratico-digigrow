'use client'

import { ComponentProps } from 'react'

import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

import { useTaskHandleDialogContext } from '../contexts/task-handle-context'

interface TaskHandleButtonDialogHeaderProps
  extends ComponentProps<typeof DialogHeader> {}

export function TaskHandleButtonDialogHeader(
  props: TaskHandleButtonDialogHeaderProps,
) {
  const state = useTaskHandleDialogContext()
  if (!state) return null
  return (
    <DialogHeader {...props}>
      <DialogTitle>
        {state.type === 'edit' ? 'Editar tarefa' : 'Criar tarefa'}
      </DialogTitle>
      <DialogDescription>
        Confirme suas alterações clicando em "
        {state.type === 'edit' ? 'Salvar' : 'Criar'}".
      </DialogDescription>
    </DialogHeader>
  )
}
