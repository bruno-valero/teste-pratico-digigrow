import z from 'zod'

const envSchema = z.object({
  API_URL: z.string().min(6).url(),
})

const _env = envSchema.safeParse(process.env)

if (!_env.success)
  throw new Error(
    `invalid environment variable schema: ${JSON.stringify(_env.error.format(), null, 4)}`,
  )

/**
 * ---
 *
 * ## env
 *
 * É um objeto com as variáveis de ambiente já validadas.
 *
 * ---
 */
export const env = _env.data
