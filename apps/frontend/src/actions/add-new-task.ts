'use server'

import { revalidateTag } from 'next/cache'
import { redirect } from 'next/navigation'

import { env } from '@/env'
import { TasksTags } from '@/fetch-tags/tasks'

export async function addNewTask({
  title,
  description,
}: {
  title: string
  description: string
}) {
  const response = await fetch(`${env.API_URL}/tasks`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title,
      description,
    }),
  })

  if (!response.ok) {
    return { message: 'Falha ao adicionar a tarefa' }
  }

  revalidateTag(TasksTags.ALL)

  // redirect('/')
}
