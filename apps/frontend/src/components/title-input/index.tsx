'use client'

import {
  ChangeEvent,
  ComponentProps,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react'

import { cn } from '@/lib/utils'

import { FormState } from '../task-handle-button/hooks/use-task-handle'
import { Input } from '../ui/input'

interface TitleInputProps extends ComponentProps<typeof Input> {
  value?: string
  updateState?: (props: FormState) => void
}

/**
 * ---
 *
 * ## TitleInput
 *
 * Componente de título do formulário de criação de tarefa.
 *
 * ---
 *
 * @param props.value - Valor do campo de título.
 * @param props.updateState - Função para atualizar o estado do formulário.
 * @param props.onChange - Função para lidar com o evento de alteração do campo de título.
 * @param ...InputProps - Propriedades adicionais para o componente Input.
 * @returns
 */
export function TitleInput(props: TitleInputProps) {
  const [data, setData] = useState(props.value ?? '')
  const isEmpty = useMemo(() => data.trim().length === 0, [data.length])
  const [hasChanged, setHasChanged] = useState(false)

  useEffect(() => {
    props.updateState?.({ title: { isEmpty, hasChanged, value: data } })
  }, [isEmpty, hasChanged, props.updateState, data])

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const data = e.target.value

      setHasChanged(true)
      setData(data)
      props.onChange?.(e)
    },
    [props.onChange, props.updateState],
  )

  return (
    <div className="flex flex-col items-start justify-center gap-2">
      <Input
        {...props}
        className={cn(
          isEmpty && hasChanged && 'focus-visible:ring-destructive',
        )}
        value={data}
        onChange={handleChange}
      />
      <span className="text-sm font-semibold text-destructive">
        {isEmpty && hasChanged && 'Insira o título'}
      </span>
    </div>
  )
}
