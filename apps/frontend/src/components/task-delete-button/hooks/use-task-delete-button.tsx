import { FormEvent, useCallback, useRef } from 'react'

import { deleteTask } from '@/actions/delete-task'
import { TaskListModel } from '@/components/task-list/contexts/task-list-context'
import { ToastAction } from '@/components/ui/toast'
import { toast } from '@/hooks/use-toast'

interface UseTaskDeleteButtonProps {
  task: TaskListModel[0]
}

export function useTaskDeleteButton({ task }: UseTaskDeleteButtonProps) {
  const dialogCloseRef = useRef<HTMLButtonElement>(null)
  const dialogTriggerRef = useRef<HTMLButtonElement>(null)

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      const response = await deleteTask({
        id: task.id,
      })

      if (response.message) {
        toast({
          title: 'Erro ao excluir a tarefa',
          description: 'Houve um erro ao excluir a tarefa',
          action: (
            <ToastAction
              altText="Tentar novamente"
              onClick={() => dialogTriggerRef.current?.click()}
            >
              Novamente
            </ToastAction>
          ),
        })
      }

      dialogCloseRef.current?.click()
    },
    [task.id],
  )

  return {
    refs: { dialogCloseRef, dialogTriggerRef },
    actions: { handleSubmit },
  }
}
