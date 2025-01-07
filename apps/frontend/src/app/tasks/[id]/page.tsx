import { redirect } from 'next/navigation'

import { TaskDetailed } from '@/components/task-detailed'

export default async function DetailedTask({
  params,
}: {
  params: Promise<Record<string, string>>
}) {
  const awaitedParams = await params
  const { id } = awaitedParams

  if (!id) {
    redirect('/tasks')
  }

  return (
    <main className="flex w-full flex-col items-center justify-center gap-4 p-4">
      <TaskDetailed taskId={id} />
    </main>
  )
}
