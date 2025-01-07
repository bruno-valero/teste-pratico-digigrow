'use client'

import { ComponentProps, createContext, useContext } from 'react'

import { useDimensions } from '@/hooks/use-dimensions'

export type TaskListModel = {
  title: string
  description: string
  id: string
}[]

/**
 * ---
 *
 * ## TaskListContext
 *
 * Contexto do componente TaskList. Fornece uma lista de tarefas cadastradas no sistema.
 *
 * ---
 */
const TaskListContext = createContext<{ tasks: TaskListModel } | null>(null)

interface TaskListProviderProps extends ComponentProps<'div'> {
  tasks: TaskListModel
}

/**
 * ---
 *
 * ## TaskListProvider
 *
 * Componente que fornece uma lista de tarefas cadastradas no sistema.
 *
 * ---
 *
 * @param props.children - Componentes filhos do TaskListProvider.
 * @param props.tasks - Tarefas a serem exibidas no array.
 * @param ...divProps - Propriedades adicionais para o componente div.
 */
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

/**
 * ---
 *
 * ## useTaskListContext
 *
 * Retorna o contexto do componente TaskList.
 *
 * ---
 */
export const useTaskListContext = () => useContext(TaskListContext)
