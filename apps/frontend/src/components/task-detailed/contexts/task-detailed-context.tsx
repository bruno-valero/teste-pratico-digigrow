'use client'

import { ComponentProps, createContext, useContext } from 'react'

import { TaskDetailedModel } from '..'

const TaskDetailedContext = createContext<{ task: TaskDetailedModel } | null>(
  null,
)

interface TaskDetailedProviderProps extends ComponentProps<'div'> {
  task: TaskDetailedModel
}

export function TaskDetailedProvider({
  children,
  task,
  ...props
}: TaskDetailedProviderProps) {
  return (
    <TaskDetailedContext.Provider value={{ task }}>
      <div
        className="mt-10 flex w-full max-w-[1080px] items-center justify-center max-sm:max-w-[95%]"
        {...props}
      >
        {children}
      </div>
    </TaskDetailedContext.Provider>
  )
}

export const useTaskDetailedContext = () => useContext(TaskDetailedContext)
