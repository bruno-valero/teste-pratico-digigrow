'use client'

import { useRouter } from 'next/navigation'
import { ComponentProps } from 'react'

import { Button } from '@/components/ui/button'

interface TaskDetailedCardHeaderButtonProps
  extends ComponentProps<typeof Button> {}

export function TaskDetailedCardHeaderButton({
  children,
  ...props
}: TaskDetailedCardHeaderButtonProps) {
  const router = useRouter()
  return (
    <Button
      {...props}
      variant={'outline'}
      className="h-full w-auto rounded-full px-3 py-3"
      onClick={() => router.back()}
    >
      {children}
    </Button>
  )
}
