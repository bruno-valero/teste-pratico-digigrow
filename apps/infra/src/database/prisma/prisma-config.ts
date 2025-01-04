import { PrismaClient } from '@prisma/client'

/**
 * ---
 *
 * ## prisma
 *
 * É a instância do cliente Prisma.
 *
 * ---
 */
export const prisma = new PrismaClient({ log: ['warn', 'error'] })
