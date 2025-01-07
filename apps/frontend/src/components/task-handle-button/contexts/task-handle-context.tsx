'use client'

import { ComponentProps, createContext, useContext } from 'react'

import { TaskListModel } from '@/components/task-list/contexts/task-list-context'
import { Dialog } from '@/components/ui/dialog'

import { TaskHandleButtonType } from '..'
import { useTaskHandle, UseTaskHandleResponse } from '../hooks/use-task-handle'

export type TaskHandleContext =
  | (UseTaskHandleResponse & {
      type: TaskHandleButtonType
    })
  | null

const TaskHandleContext = createContext<TaskHandleContext>(null)

interface TaskHandleDialogProviderProps extends ComponentProps<typeof Dialog> {
  task: TaskListModel[0]
  type: TaskHandleButtonType
}

export function TaskHandleDialogProvider({
  children,
  task,
  type,
  ...props
}: TaskHandleDialogProviderProps) {
  const state = useTaskHandle({ task, type })

  return (
    <TaskHandleContext.Provider value={{ ...state, type }}>
      <Dialog {...props}>{children}</Dialog>
    </TaskHandleContext.Provider>
  )
}

export const useTaskHandleDialogContext = () => useContext(TaskHandleContext)
