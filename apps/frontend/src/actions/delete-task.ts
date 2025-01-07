'use server'

import { revalidateTag } from 'next/cache'
import { redirect } from 'next/navigation'

import { env } from '@/env'
import { TasksTags } from '@/fetch-tags/tasks'

export async function deleteTask({ id }: { id: string }) {
  const response = await fetch(`${env.API_URL}/tasks/${id}`, {
    method: 'DELETE',
  })

  if (!response.ok) {
    return { message: 'Falha ao excluir a tarefa' }
  }

  revalidateTag(TasksTags.ALL)

  redirect('/')
}
