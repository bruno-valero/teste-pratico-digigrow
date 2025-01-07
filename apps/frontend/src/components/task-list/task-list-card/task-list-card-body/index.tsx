import { CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

import { TaskListModel } from '../../contexts/task-list-context'

interface TaskListCardBodyProps {
  task: TaskListModel[0]
}

/**
 * ---
 *
 * ## TaskListCardBody
 *
 * Componente de corpo do card de tarefa. Exibe informações detalhadas sobre uma tarefa específica.
 *
 * ---
 *
 * @param props.task - Tarefa a ser exibida no card.
 * @returns
 */
export function TaskListCardBody({ task }: TaskListCardBodyProps) {
  return (
    <>
      <CardHeader className="w-full">
        <CardTitle>{task.title}</CardTitle>
        <CardDescription>
          {task.description.slice(0, 20).concat('...')}
        </CardDescription>
      </CardHeader>
      {/* <CardContent className="relative flex h-full min-h-full w-full max-sm:hidden"> */}
      {/* <p className="opacity-0">oi</p> */}
      {/* <div className="absolute right-2 top-4 flex h-full w-[2rem] items-start justify-start opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"> */}
      {/* <Trash className="pointer-events-none h-5 w-5" /> */}
      {/* <TaskListCardBodyDeleteButton task={task} /> */}
      {/* </div> */}
      {/* </CardContent> */}
    </>
  )
}
