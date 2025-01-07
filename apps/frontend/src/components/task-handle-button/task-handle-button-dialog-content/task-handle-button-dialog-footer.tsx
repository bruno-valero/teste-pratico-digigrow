'use client'

import { ComponentProps } from 'react'

import { Button } from '@/components/ui/button'
import { DialogClose, DialogFooter } from '@/components/ui/dialog'

import { useTaskHandleDialogContext } from '../contexts/task-handle-context'

interface TaskHandleButtonDialogFooterProps
  extends ComponentProps<typeof DialogFooter> {}

export function TaskHandleButtonDialogFooter(
  props: TaskHandleButtonDialogFooterProps,
) {
  const state = useTaskHandleDialogContext()
  if (!state) return null

  return (
    <DialogFooter className="mt-8" {...props}>
      <DialogClose ref={state?.refs.dialogCloseRef} asChild>
        <Button variant={'secondary'} className="w-full">
          Cancelar
        </Button>
      </DialogClose>

      <Button
        variant={'success'}
        type="submit"
        className="w-full"
        disabled={!state?.data.titleOk || !state?.data.descriptionOk}
      >
        {state.type === 'edit' ? 'Salvar' : 'Criar'}
      </Button>
    </DialogFooter>
  )
}
