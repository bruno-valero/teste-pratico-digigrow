'use client'

import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { ComponentProps } from 'react'

import { useTaskDetailedContext } from '../../contexts/task-detailed-context'

interface TaskDetailedCardHeaderMetadataProps extends ComponentProps<'div'> {}

/**
 * ---
 *
 * ## TaskDetailedCardHeaderMetadata
 *
 * Componente de metadados do cabeçalho da tarefa detalhada. Exibe informações sobre a criação e a última atualização da tarefa.
 *
 * ---
 *
 * @param ...divProps - Propriedades adicionais para o componente div.
 */
export function TaskDetailedCardHeaderMetadata(
  props: TaskDetailedCardHeaderMetadataProps,
) {
  const context = useTaskDetailedContext()
  if (!context) return null

  return (
    <div
      className="flex items-start justify-between gap-2 pb-2 text-sm font-light text-foreground/50"
      {...props}
    >
      <span>
        Criado{' '}
        {formatDistanceToNow(new Date(context.task.createdAt), {
          locale: ptBR, // Usa a localidade em português do Brasil
          addSuffix: true, // Adiciona o sufixo como "atrás"
        })}
      </span>
      {context.task.updatedAt && (
        <span>
          Última atualização{' '}
          {formatDistanceToNow(new Date(context.task.updatedAt), {
            locale: ptBR, // Usa a localidade em português do Brasil
            addSuffix: true, // Adiciona o sufixo como "atrás"
          })}
        </span>
      )}
    </div>
  )
}
