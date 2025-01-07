'use server'

import { revalidateTag } from 'next/cache'
import { redirect } from 'next/navigation'
import { z } from 'zod'

import { env } from '@/env'
import { TasksTags } from '@/fetch-tags/tasks'

const deleteTaskRequestSchema = z.object({
  id: z.string().uuid(),
})

/**
 * ---
 *
 * ## Server Action
 *
 * Uma server action é uma função que será executada do lado do servidor. Para saber mais sobre as **Server Actions**, veja a [documentação do Next.js sobre elas.](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations)
 *
 * ---
 *
 * ### DeleteTask
 *
 * Faz uma reqisição à API para excluir uma tarefa. Ela Faz algumas validações para evitar de enviar uma requisição indevida ao servidor.
 *
 * ---
 *
 * @param params.id - ID da tarefa a ser excluída
 *
 */
export async function deleteTask({ id }: { id: string }) {
  const requestParsed = deleteTaskRequestSchema.safeParse({
    id,
  })

  if (!requestParsed.success) return { message: 'Falha ao excluir a tarefa' }
  const request = requestParsed.data

  const response = await fetch(`${env.API_URL}/tasks/${request.id}`, {
    method: 'DELETE',
  })

  if (!response.ok) {
    return { message: 'Falha ao excluir a tarefa' }
  }

  revalidateTag(TasksTags.ALL)

  redirect('/')
}
