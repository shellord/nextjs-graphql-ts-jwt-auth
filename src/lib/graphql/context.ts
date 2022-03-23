import { PrismaClient } from '@prisma/client'

import { getUserFromToken } from '@/lib/hash'
import { prisma } from '@/lib/prisma'

export type Context = {
  userId: string | null
  prisma: PrismaClient
}

export async function createContext(req: any): Promise<Context> {
  const authHeader = req.headers.authorization
  const token = authHeader.split(' ')[1]
  const userId = getUserFromToken(token)
  return {
    userId,
    prisma,
  }
}
