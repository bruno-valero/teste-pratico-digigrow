import { TaskList } from '@/components/task-list'

export default function Home() {
  return (
    <main className="flex w-full flex-col items-center justify-center gap-4 p-4">
      <TaskList />
    </main>
  )
}
