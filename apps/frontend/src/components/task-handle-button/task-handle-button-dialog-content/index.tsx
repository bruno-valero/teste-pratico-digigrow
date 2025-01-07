'use client'

import { ComponentProps } from 'react'

import { DialogContent } from '@/components/ui/dialog'
import { useDimensions } from '@/hooks/use-dimensions'

import { useTaskHandleDialogContext } from '../contexts/task-handle-context'
import { TaskHandleButtonDialogDescriptionTextArea } from './task-handle-button-dialog-description-textarea'
import { TaskHandleButtonDialogFooter } from './task-handle-button-dialog-footer'
import { TaskHandleButtonDialogHeader } from './task-handle-button-dialog-header'
import { TaskHandleButtonDialogTitleInput } from './task-handle-button-dialog-title-input'

interface TaskHandleButtonDialogContentProps
  extends ComponentProps<typeof DialogContent> {}

export function TaskHandleButtonDialogContent(
  props: TaskHandleButtonDialogContentProps,
) {
  const state = useTaskHandleDialogContext()
  const { height, width } = useDimensions()

  return (
    <DialogContent
      {...props}
      className="overflow-auto max-md:w-full md:w-auto"
      style={{ maxHeight: height * 0.9, maxWidth: width * 0.9 }}
    >
      <div className="max-w-[1080px]">
        <TaskHandleButtonDialogHeader />
        <form onSubmit={state?.actions.handleSubmit}>
          <div className="flex flex-col gap-2">
            <TaskHandleButtonDialogTitleInput id="title" />
            <TaskHandleButtonDialogDescriptionTextArea id="description" />
          </div>
          <TaskHandleButtonDialogFooter />
        </form>
      </div>
    </DialogContent>
  )
}
