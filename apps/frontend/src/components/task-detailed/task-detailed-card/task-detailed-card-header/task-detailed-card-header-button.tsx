'use client'

import { useRouter } from 'next/navigation'
import { ComponentProps } from 'react'

import { Button } from '@/components/ui/button'

interface TaskDetailedCardHeaderButtonProps
  extends ComponentProps<typeof Button> {}

/**
 * ---
 *
 * ## TaskDetailedCardHeaderButton
 *
 * Componente de botão do cabeçalho da tarefa detalhada. Exibe um botão que leva para a tela anterior.
 *
 * ---
 *
 * @param ...ButtonProps - Propriedades adicionais para o componente Button.
 */
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
