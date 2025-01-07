import { Plus } from 'lucide-react'

import { env } from '@/env'
import { TasksTags } from '@/fetch-tags/tasks'

import { TaskHandleButton } from '../task-handle-button'
import { Button } from '../ui/button'
import { Separator } from '../ui/separator'
import { TaskListProvider } from './contexts/task-list-context'
import { TaskListArray } from './task-list-array'

export type TaskModel = {
  title: string
  description: string
  id: string
}

/**
 * ---
 *
 * ## TaskList
 *
 * Componente de lista de tarefas. Exibe uma lista de tarefas cadastradas no sistema.
 *
 * ---
 */
export async function TaskList() {
  let tasksData: TaskModel[]

  // Try catch inserido por causa dos erros durante a Build do projeto Next.js
  // O erro ocorre porque duranre a build o Componente TaskList faz a requisição ao servidor (que está offline no momento)
  // Então, para que a build não falhe, faço uma tentativa de requisição ao servidor e caso ocorra algum erro, retornamos um array vazio

  // Porque o servidor está offline?
  // Porque no monorepo todas as aplicações fazem build ao mesmo tempo, então ele está em processo de build também.
  try {
    const tasksResponse = await fetch(`${env.API_URL}/tasks`, {
      next: { tags: [TasksTags.ALL] },
    })

    tasksData = (await tasksResponse.json()) as TaskModel[]
  } catch (e) {
    console.error('TaskList fetch error', e)
    tasksData = []
  }

  const tasks = tasksData

  return (
    <TaskListProvider tasks={tasks}>
      <div className="flex w-full flex-col gap-1">
        <div className="mt-5 flex items-end justify-around">
          <span className="">{tasks.length} tarefa(s)</span>
          <TaskHandleButton
            type="create"
            buttonJSX={
              <Button
                variant={'secondary'}
                className="mb-1 flex items-center justify-center gap-2"
              >
                <Plus className="pointer-events-none min-h-5 min-w-5 text-lg" />
                Nova tarefa
              </Button>
            }
          />
        </div>
        <Separator className="mt-0 p-0" />
      </div>
      {tasks.length <= 0 && (
        <div className="flex min-h-[15rem] w-full flex-col items-center justify-center">
          <span className="text-center text-2xl font-bold text-muted-foreground">
            Nenhuma tarefa ainda cadastrada
          </span>
        </div>
      )}
      {tasks.length > 0 && <TaskListArray tasks={tasks} />}
    </TaskListProvider>
  )
}
