'use client'

import { ComponentProps } from 'react'

import { TitleInput } from '@/components/title-input'
import { Label } from '@/components/ui/label'

import { useTaskHandleDialogContext } from '../contexts/task-handle-context'

interface TaskHandleButtonDialogTitleInputProps
  extends ComponentProps<typeof TitleInput> {}

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
