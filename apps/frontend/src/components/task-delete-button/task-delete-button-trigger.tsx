import { ComponentProps } from 'react'

import { DialogTrigger } from '@/components/ui/dialog'

interface TaskDeleteButtonTriggerProps
  extends ComponentProps<typeof DialogTrigger> {
  buttonJSX: JSX.Element
}

export function TaskDeleteButtonTrigger(props: TaskDeleteButtonTriggerProps) {
  return <DialogTrigger {...props}>{props.buttonJSX}</DialogTrigger>
}
