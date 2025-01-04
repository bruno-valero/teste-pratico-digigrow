import 'dotenv/config'

import { execSync } from 'node:child_process'

import { env } from '@env/env'
import { PrismaClient } from '@prisma/client'
import { randomUUID } from 'crypto'
import { MongoClient } from 'mongodb'
import { Environment } from 'vitest/environments'

function generateDatabaseUrl(dbName: string) {
  if (!process.env.DATABASE_URL)
    throw new Error('provide a DATABASE_URL environment variable.')

  const url = new URL(process.env.DATABASE_URL)
  url.pathname = `/${dbName}`

  return url.toString()
}

const prisma = new PrismaClient()

export default <Environment>{
  name: 'prisma',
  transformMode: 'web',
  async setup() {
    const dbName = randomUUID()
    const DATABASE_URL = generateDatabaseUrl(dbName)
    process.env.DATABASE_URL = DATABASE_URL

    execSync('npx prisma db push')
    console.log('database deployed at', `"${DATABASE_URL}"`)

    return {
      async teardown() {
        const dbUrl = new URL(DATABASE_URL)
        const dbDatabaseName = dbUrl.pathname.slice(1) // Nome do banco de dados de teste

        // Conectar-se diretamente ao MongoDB para remover o banco de dados ou coleções
        const client = new MongoClient(generateDatabaseUrl(env.DATABASE_NAME))

        await client.connect()
        const db = client.db(dbDatabaseName)

        // Remove todas as coleções do banco de dados de teste
        console.log('removing database at', `"${DATABASE_URL}"`)
        const collections = await db.collections()
        for (const collection of collections) {
          await collection.drop()
        }

        await client.close()
        await prisma.$disconnect()
      },
    }
  },
}
