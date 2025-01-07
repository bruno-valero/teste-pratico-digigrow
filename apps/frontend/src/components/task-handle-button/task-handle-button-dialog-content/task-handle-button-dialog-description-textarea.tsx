'use client'

import { ComponentProps } from 'react'

import { DescriptionTextArea } from '@/components/description-text-area'
import { Label } from '@/components/ui/label'

import { useTaskHandleDialogContext } from '../contexts/task-handle-context'

interface TaskHandleButtonDialogDescriptionTextAreaProps
  extends ComponentProps<typeof DescriptionTextArea> {}

/**
 * ---
 *
 * ## TaskHandleButtonDialogDescriptionTextArea
 *
 * Componente de texto de descrição do diálogo de edição ou criação de tarefa. Exibe um campo de texto de descrição para solicitar a confirmação da ação.
 *
 * ---
 *
 * @param ...DescriptionTextAreaProps - Propriedades adicionais para o componente DescriptionTextArea.
 */
export function TaskHandleButtonDialogDescriptionTextArea(
  props: TaskHandleButtonDialogDescriptionTextAreaProps,
) {
  const state = useTaskHandleDialogContext()

  return (
    <div className="flex flex-col gap-2">
      <Label className="mt-4" htmlFor="description">
        Descrição
      </Label>
      <DescriptionTextArea
        {...props}
        ref={state?.refs.descriptionRef}
        updateState={state?.state.updateFormState}
        value={state?.data.task.description ?? ''}
        id="description"
      />
    </div>
  )
}
