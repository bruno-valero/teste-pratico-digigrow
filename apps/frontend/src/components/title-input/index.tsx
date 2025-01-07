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
import { Input } from '../ui/input'

interface TitleInputProps extends ComponentProps<typeof Input> {
  value?: string
  updateState?: (props: FormState) => void
}

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
