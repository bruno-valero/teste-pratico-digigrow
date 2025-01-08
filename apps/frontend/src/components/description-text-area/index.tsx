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
import { Textarea } from '../ui/textarea'

interface DescriptionTextAreaProps extends ComponentProps<typeof Textarea> {
  value?: string
  updateState?: (props: FormState) => void
}

export const charactersLimit = 256

/**
 * ---
 *
 * ## DescriptionTextArea
 *
 * Componente de texto de descrição do formulário de criação de tarefa.
 *
 * ---
 *
 * @param props.value - Valor do campo de texto de descrição.
 * @param props.updateState - Função para atualizar o estado do formulário.
 * @param props.onChange - Função para lidar com o evento de alteração do campo de texto de descrição.
 * @returns
 */
export function DescriptionTextArea(props: DescriptionTextAreaProps) {
  const [data, setData] = useState(props.value ?? '')
  const remainingCharacters = useMemo(
    () => charactersLimit - data.length,
    [data.length],
  )

  useEffect(() => {
    props.updateState?.({ description: { remainingCharacters, value: data } })
  }, [remainingCharacters, props.updateState, data])

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      const data = e.target.value
      const remainingCharacters = charactersLimit - data.length

      if (remainingCharacters <= 0) {
        if (data.length <= charactersLimit) {
          setData(data)
        }
      } else {
        setData(data)
      }
      props.onChange?.(e)
    },
    [props.onChange],
  )

  return (
    <div className="flex flex-col items-start justify-center gap-2">
      <Textarea
        {...props}
        onChange={handleChange}
        value={data}
        rows={8}
        className={cn(remainingCharacters <= 0 && 'blur-[1px]')}
        // disabled={remainingCharacters <= 0}
      />
      <span>{remainingCharacters - 1} caracteres restantes</span>
    </div>
  )
}
