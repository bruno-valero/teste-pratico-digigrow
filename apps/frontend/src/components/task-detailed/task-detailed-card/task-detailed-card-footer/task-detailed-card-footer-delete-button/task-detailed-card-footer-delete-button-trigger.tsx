import { Trash } from 'lucide-react'
import { ComponentProps } from 'react'

import { Button } from '@/components/ui/button'

interface TaskDetailedCardFooterDeleteButtonTriggerProps
  extends ComponentProps<typeof Button> {}

export function TaskDetailedCardFooterDeleteButtonTrigger(
  props: TaskDetailedCardFooterDeleteButtonTriggerProps,
) {
  return (
    <Button
      variant={'destructive'}
      className="flex items-center justify-center gap-2 px-6 py-4"
      {...props}
    >
      <Trash className="pointer-events-none h-6 w-6" />
      <span className="text-mg font-normal">Excluir</span>
    </Button>
  )
}
