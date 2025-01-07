'use client'

import { ComponentProps, createContext, useContext } from 'react'

import { useDimensions } from '@/hooks/use-dimensions'

export type TaskListModel = {
  title: string
  description: string
  id: string
}[]

const TaskListContext = createContext<{ tasks: TaskListModel } | null>(null)

interface TaskListProviderProps extends ComponentProps<'div'> {
  tasks: TaskListModel
}

export function TaskListProvider({
  children,
  tasks,
  ...props
}: TaskListProviderProps) {
  const { height, width } = useDimensions()

  return (
    <TaskListContext.Provider value={{ tasks }}>
      <div
        className="flex w-full items-center justify-center"
        style={{ maxHeight: height * 0.9, maxWidth: width * 0.9 }}
      >
        <div
          className="flex w-full max-w-[1080px] flex-col items-center justify-center gap-4 p-4"
          {...props}
        >
          {children}
        </div>
      </div>
    </TaskListContext.Provider>
  )
}

export const useTaskListContext = () => useContext(TaskListContext)
