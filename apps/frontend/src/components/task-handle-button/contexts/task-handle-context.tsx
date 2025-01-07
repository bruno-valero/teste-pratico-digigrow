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

/**
 * ---
 *
 * ## TaskHandleContext
 *
 * Contexto do componente TaskHandleDialog. Fornece informações sobre a tarefa a ser editada ou criada e o tipo de ação a ser realizada.
 *
 * ---
 */
const TaskHandleContext = createContext<TaskHandleContext>(null)

interface TaskHandleDialogProviderProps extends ComponentProps<typeof Dialog> {
  task: TaskListModel[0]
  type: TaskHandleButtonType
}

/**
 * ---
 *
 * ## TaskHandleDialogProvider
 *
 * Componente que fornece informações sobre a tarefa a ser editada ou criada e o tipo de ação a ser realizada.
 *
 * ---
 *
 * @param props.children - Componentes filhos do TaskHandleDialogProvider.
 * @param props.task - Tarefa a ser editada ou criada.
 * @param props.type - Tipo de ação a ser realizada. Pode ser 'edit' ou 'create'.
 * @param ...DialogProps - Propriedades adicionais para o componente Dialog.
 * @returns
 */
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

/**
 * ---
 *
 * ## useTaskHandleDialogContext
 *
 * Retorna o contexto do componente TaskHandleDialog.
 *
 * ---
 */
export const useTaskHandleDialogContext = () => useContext(TaskHandleContext)
