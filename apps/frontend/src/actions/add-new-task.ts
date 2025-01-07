'use server'

import { revalidateTag } from 'next/cache'
import { z } from 'zod'

import { env } from '@/env'
import { TasksTags } from '@/fetch-tags/tasks'

const addNewTaskskRequestSchema = z.object({
  title: z.string().min(1),
  description: z.string().max(255).optional(),
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
 * ### AddNewTask
 *
 * Faz uma reqisição à API para criar uma nova tarefa. Ela Faz algumas validações para evitar de enviar uma requisição indevida ao servidor.
 *
 * ---
 *
 * @param params.title - Título da nova tarefa
 * @param params.description - Descrição da nova tarefa
 *
 */
export async function addNewTask({
  title,
  description,
}: {
  title: string
  description: string
}) {
  const requestParsed = addNewTaskskRequestSchema.safeParse({
    title,
    description,
  })

  if (!requestParsed.success) return { message: 'Falha ao adicionar a tarefa' }
  const request = requestParsed.data

  const response = await fetch(`${env.API_URL}/tasks`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title: request.title,
      description: request.description,
    }),
  })

  if (!response.ok) {
    return { message: 'Falha ao adicionar a tarefa' }
  }

  revalidateTag(TasksTags.ALL)
}
