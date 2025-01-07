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

export async function TaskList() {
  const tasksResponse = await fetch(`${env.API_URL}/tasks`, {
    next: { tags: [TasksTags.ALL] },
  })
  const tasksData = await tasksResponse.json()

  const tasks: TaskModel[] = tasksData

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
