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

import { FormState } from '../task-detailed/task-detailed-card/task-detailed-card-footer/task-detailed-card-footer-edit-button'
import { Textarea } from '../ui/textarea'

interface DescriptionTextAreaProps extends ComponentProps<typeof Textarea> {
  value?: string
  updateState?: (props: FormState) => void
}

export function DescriptionTextArea(props: DescriptionTextAreaProps) {
  const [data, setData] = useState(props.value ?? '')
  const remainingCharacters = useMemo(() => 255 - data.length, [data.length])

  useEffect(() => {
    props.updateState?.({ description: { remainingCharacters, value: data } })
  }, [remainingCharacters, props.updateState, data])

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      const data = e.target.value
      const remainingCharacters = 255 - data.length

      if (remainingCharacters <= 0) {
        if (data.length <= 255) {
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
      <span>{remainingCharacters} caracteres restantes</span>
    </div>
  )
}
