'use client'

import { ComponentProps } from 'react'

import { DialogTrigger } from '@/components/ui/dialog'

import { useTaskHandleDialogContext } from './contexts/task-handle-context'

interface TaskHandleButtonTriggerProps
  extends ComponentProps<typeof DialogTrigger> {
  buttonJSX: JSX.Element
}

export function TaskHandleButtonTrigger(props: TaskHandleButtonTriggerProps) {
  const state = useTaskHandleDialogContext()

  return (
    <DialogTrigger {...props} ref={state?.refs.dialogTriggerRef} asChild>
      {props.buttonJSX}
    </DialogTrigger>
  )
}
