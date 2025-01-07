'use client'

import {
  FormEvent,
  RefObject,
  useCallback,
  useMemo,
  useRef,
  useState,
} from 'react'

import { addNewTask } from '@/actions/add-new-task'
import { updateTask } from '@/actions/update-task'
import { TaskListModel } from '@/components/task-list/contexts/task-list-context'
import { ToastAction } from '@/components/ui/toast'
import { useToast } from '@/hooks/use-toast'

import { TaskHandleButtonType } from '..'

export type FormState =
  | {
      description?: { remainingCharacters: number; value: string }
      title: { isEmpty: boolean; hasChanged: boolean; value: string }
    }
  | {
      description: { remainingCharacters: number; value: string }
      title?: { isEmpty: boolean; hasChanged: boolean; value: string }
    }

export type UseTaskHandleResponse = {
  data: {
    titleOk: boolean
    descriptionOk: boolean
    task: TaskListModel[0]
  }
  actions: {
    handleSubmit: (e: FormEvent<HTMLFormElement>) => void
  }
  state: {
    formState: FormState
    updateFormState: (state: FormState) => void
  }
  refs: {
    dialogCloseRef: RefObject<HTMLButtonElement>
    dialogTriggerRef: RefObject<HTMLButtonElement>
    titleRef: RefObject<HTMLInputElement>
    descriptionRef: RefObject<HTMLTextAreaElement>
  }
}

interface UseTaskHandleProps {
  task: TaskListModel[0]
  type: TaskHandleButtonType
}

export function useTaskHandle({
  task,
  type,
}: UseTaskHandleProps): UseTaskHandleResponse {
  const { toast } = useToast()

  const dialogCloseRef = useRef<HTMLButtonElement>(null)
  const dialogTriggerRef = useRef<HTMLButtonElement>(null)

  const titleRef = useRef<HTMLInputElement>(null)
  const descriptionRef = useRef<HTMLTextAreaElement>(null)

  const [formState, setFormState] = useState<Required<FormState>>({
    description: { remainingCharacters: 0, value: '' },
    title: { isEmpty: true, hasChanged: false, value: '' },
  })

  const { titleOk, descriptionOk } = useMemo(() => {
    const { title, description } = formState

    const result = {
      titleOk:
        (!title.isEmpty && title.value !== task.title) ||
        description.value !== task.description,
      descriptionOk:
        (description.remainingCharacters > 0 &&
          description.value !== task.description) ||
        title.value !== task.title,
    }

    return result
  }, [formState, task.title, task.description])

  const updateFormState = useCallback((state: FormState) => {
    setFormState((prev) => ({
      ...prev,
      description: state.description ?? prev.description,
      title: state.title ?? prev.title,
    }))
  }, [])

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      let response: Record<string, string> | { message: string } | undefined

      if (type === 'edit') {
        response = await updateTask({
          id: task.id,
          title: titleRef.current!.value,
          description: descriptionRef.current!.value,
        })
      } else {
        response = await addNewTask({
          title: titleRef.current!.value,
          description: descriptionRef.current!.value,
        })
      }

      if (response?.message) {
        toast({
          title: `Erro ao ${type === 'edit' ? 'atualizar' : 'criar'} a tarefa`,
          description: `Houve um erro ao ${type === 'edit' ? 'atualizar' : 'criar'} a tarefa`,
          action: (
            <ToastAction
              altText="Tentar novamente"
              onClick={() => dialogTriggerRef.current?.click()}
            >
              Novamente
            </ToastAction>
          ),
        })
      } else {
        toast({
          variant: 'success',
          title: 'Sucesso!',
          description: `A tarefa foi ${type === 'edit' ? 'atualizada' : 'criada'} com sucesso`,
          action: (
            <ToastAction
              altText="Novamente"
              onClick={() => dialogTriggerRef.current?.click()}
            >
              Novamente
            </ToastAction>
          ),
        })
      }

      dialogCloseRef.current?.click()
    },
    [
      task.id,
      titleRef.current,
      descriptionRef.current,
      dialogCloseRef.current,
      dialogTriggerRef.current,
    ],
  )

  return {
    refs: {
      dialogCloseRef,
      dialogTriggerRef,
      titleRef,
      descriptionRef,
    },
    state: {
      formState,
      updateFormState,
    },
    actions: {
      handleSubmit,
    },
    data: {
      titleOk,
      descriptionOk,
      task,
    },
  }
}
