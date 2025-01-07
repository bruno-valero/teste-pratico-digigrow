'use client'

import { ComponentProps } from 'react'

import { TitleInput } from '@/components/title-input'
import { Label } from '@/components/ui/label'

import { useTaskHandleDialogContext } from '../contexts/task-handle-context'

interface TaskHandleButtonDialogTitleInputProps
  extends ComponentProps<typeof TitleInput> {}

/**
 * ---
 *
 * ## TaskHandleButtonDialogTitleInput
 *
 * Componente de título do diálogo de edição ou criação de tarefa. Exibe um campo de título para solicitar a confirmação da ação.
 *
 * ---
 *
 * @param ...TitleInputProps - Propriedades adicionais para o componente TitleInput.
 */
export function TaskHandleButtonDialogTitleInput(
  props: TaskHandleButtonDialogTitleInputProps,
) {
  const state = useTaskHandleDialogContext()

  return (
    <div className="flex flex-col gap-2">
      <Label className="mt-4" htmlFor="title">
        Título
      </Label>
      <TitleInput
        {...props}
        ref={state?.refs.titleRef}
        updateState={state?.state.updateFormState}
        value={state?.data.task.title ?? ''}
        id="title"
      />
    </div>
  )
}
