'use client'

import { ComponentProps } from 'react'

import { Card } from '@/components/ui/card'
import { useDimensions } from '@/hooks/use-dimensions'

interface TaskDetailedCardWrapperProps extends ComponentProps<typeof Card> {}

/**
 * ---
 *
 * ## TaskDetailedCardWrapper
 *
 * Componente que envolve o componente TaskDetailedCard e adiciona estilos para que ele seja exibido corretamente no layout.
 *
 * ---
 *
 * @param ...CardProps - Propriedades adicionais para o componente Card.
 * @returns
 */
export function TaskDetailedCardWrapper(props: TaskDetailedCardWrapperProps) {
  const { width } = useDimensions()
  return (
    <Card
      className="w-full"
      style={{ maxWidth: width * 0.9 }}
      {...props}
    ></Card>
  )
}
