'use client'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { useDimensions } from '@/hooks/use-dimensions'

import { TaskListModel } from '../task-list/contexts/task-list-context'
import { useTaskDeleteButton } from './hooks/use-task-delete-button'
import { TaskDeleteButtonTrigger } from './task-delete-button-trigger'

interface TaskDeleteButtonProps {
  task: TaskListModel[0]
  buttonJSX: JSX.Element
}

/**
 * ---
 *
 * ## TaskDeleteButton
 *
 * Componente de botão de exclusão de tarefa. Ao Clicar no botão, um diálogo é exibido para solicitar a confirmação da exclusão da tarefa.
 *
 * ---
 *
 * @param props.task - Tarefa a ser excluída.
 * @param props.buttonJSX - Elemento JSX para renderização do botão.
 * @returns
 */
export function TaskDeleteButton({ task, buttonJSX }: TaskDeleteButtonProps) {
  const { actions, refs } = useTaskDeleteButton({ task })

  const { height, width } = useDimensions()

  return (
    <Dialog>
      <TaskDeleteButtonTrigger
        ref={refs.dialogTriggerRef}
        buttonJSX={buttonJSX}
      />
      <DialogContent
        className="overflow-auto max-md:w-full md:w-auto"
        style={{ maxHeight: height * 0.9, maxWidth: width * 0.9 }}
      >
        <DialogHeader>
          <DialogTitle>Excluir tarefa</DialogTitle>
          <DialogDescription>
            Tem certeza que deseja excluir a tarefa?
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={actions.handleSubmit}>
          <DialogFooter>
            <DialogClose ref={refs.dialogCloseRef} asChild>
              <Button variant={'secondary'} type="button" className="w-full">
                Cancelar
              </Button>
            </DialogClose>
            <Button variant={'destructive'} type="submit" className="w-full">
              Excluir
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
