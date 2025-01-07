'use server'

import { revalidateTag } from 'next/cache'

import { env } from '@/env'
import { TasksTags } from '@/fetch-tags/tasks'

export async function updateTask({
  id,
  title,
  description,
}: {
  id: string
  title: string
  description: string
}) {
  const response = await fetch(`${env.API_URL}/tasks/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title,
      description,
    }),
  })

  if (!response.ok) {
    return { message: 'Falha ao atualizar a tarefa' }
  }

  revalidateTag(TasksTags.ALL)

  return await response.json()
}
