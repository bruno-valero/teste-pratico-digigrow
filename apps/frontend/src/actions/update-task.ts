'use server'

import { revalidateTag } from 'next/cache'
import { z } from 'zod'

import { env } from '@/env'
import { TasksTags } from '@/fetch-tags/tasks'

const updateTaskRequestSchema = z.object({
  id: z.string().uuid(),
  title: z.string().trim().min(1),
  description: z.string().trim().max(255).optional(),
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
 * ### UpdateTask
 *
 * Faz uma reqisição à API para atualizar uma tarefa. Ela Faz algumas validações para evitar de enviar uma requisição indevida ao servidor.
 *
 * ---
 * @param params.id - ID da tarefa a ser atualizada
 * @param params.title - Título da tarefa a ser atualizada
 * @param params.description - Descrição da tarefa a ser atualizada
 *
 */
export async function updateTask({
  id,
  title,
  description,
}: {
  id: string
  title: string
  description: string
}) {
  const requestParsed = updateTaskRequestSchema.safeParse({
    id,
    title,
    description,
  })

  if (!requestParsed.success) return { message: 'Falha ao atualizar a tarefa' }
  const request = requestParsed.data

  if (title.length === 0) return { message: 'Falha ao adicionar a tarefa' }
  if (description.length > 255)
    return { message: 'Falha ao adicionar a tarefa' }

  const response = await fetch(`${env.API_URL}/tasks/${request.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title: request.title,
      description: request.description,
    }),
  })

  if (!response.ok) {
    return { message: 'Falha ao atualizar a tarefa' }
  }

  revalidateTag(TasksTags.ALL)
}
