'use client'

import { useRouter } from 'next/navigation'
import { ComponentProps } from 'react'

import { Card } from '@/components/ui/card'

interface TaskListCardWrapperProps extends ComponentProps<typeof Card> {
  taskId: string
}

export function TaskListCardWrapper({
  children,
  taskId,
  ...props
}: TaskListCardWrapperProps) {
  const router = useRouter()

  return (
    <button onClick={() => router.push(`/tasks/${taskId}`)}>
      <Card
        className="group flex h-full flex-1 cursor-pointer items-center justify-start gap-4 border-border/40 hover:border-[2px] hover:border-border max-sm:justify-center"
        {...props}
      >
        {children}
      </Card>
    </button>
  )
}
