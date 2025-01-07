import { Edit } from 'lucide-react'
import { ComponentProps } from 'react'

import { Button } from '@/components/ui/button'

interface TaskDetailedCardFooterEditButtonJSXProps
  extends ComponentProps<typeof Button> {}

export function TaskDetailedCardFooterEditButtonJSX(
  props: TaskDetailedCardFooterEditButtonJSXProps,
) {
  return (
    <Button
      variant={'secondary'}
      className="flex items-center justify-center gap-2 px-7 py-4"
      {...props}
    >
      <Edit className="pointer-events-none h-6 w-6" />
      <span className="text-mg font-normal">Editar</span>
    </Button>
  )
}
