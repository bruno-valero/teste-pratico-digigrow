import 'dotenv/config'

import z from 'zod'

const envSchema = z.object({
  DATABASE_URL: z.string().min(6).url(),
  DATABASE_NAME: z.string().min(1),
  PORT: z.string().optional().default('3333').pipe(z.coerce.number()),
  NODE_ENV: z.enum(['dev', 'test', 'prod']).default('prod'),
})

const _env = envSchema.safeParse(process.env)

if (!_env.success)
  throw new Error(
    `invalid environment variable schema: ${JSON.stringify(_env.error.format(), null, 4)}`,
  )

export const env = _env.data
