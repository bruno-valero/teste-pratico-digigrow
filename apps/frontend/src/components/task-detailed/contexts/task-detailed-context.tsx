'use client'

import { ComponentProps, createContext, useContext } from 'react'

import { TaskDetailedModel } from '..'

/**
 * ---
 *
 * ## TaskDetailedContext
 *
 * Contexto do componente TaskDetailed. Fornece informações detalhadas sobre uma tarefa específica.
 *
 * ---
 */
const TaskDetailedContext = createContext<{ task: TaskDetailedModel } | null>(
  null,
)

interface TaskDetailedProviderProps extends ComponentProps<'div'> {
  task: TaskDetailedModel
}

/**
 * ---
 *
 * ## TaskDetailedProvider
 *
 * Componente que fornece informações detalhadas sobre uma tarefa específica.
 *
 * ---
 *
 * @param props.children - Componentes filhos do TaskDetailedProvider.
 * @param props.task - Informações detalhadas sobre uma tarefa específica.
 * @param ...divProps - Propriedades adicionais para o componente div.
 */
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

/**
 * ---
 *
 * ## useTaskDetailedContext
 *
 * Retorna o contexto do componente TaskDetailed.
 *
 * ---
 */
export const useTaskDetailedContext = () => useContext(TaskDetailedContext)
