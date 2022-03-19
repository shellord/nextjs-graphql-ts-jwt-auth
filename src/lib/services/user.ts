import { CreateUserMutationVariables } from '@/generated'

import type { Context } from '@/lib/graphql/context'
import {
  generateAccessToken,
  generateRefreshToken,
  hashPassword,
} from '@/lib/hash'

export const createUser = async (
  { name, email, password }: CreateUserMutationVariables,
  ctx: Context,
) => {
  const existingUser = await ctx.prisma.user.findFirst({
    where: {
      email,
    },
  })
  if (existingUser) {
    throw new Error('User already exists')
  }
  const hashedPassword = await hashPassword(password)
  const user = await ctx.prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  })
  const accessToken = generateAccessToken(user.id)
  const refreshToken = generateRefreshToken(user.id)
  return {
    accessToken: accessToken,
    refreshToken: refreshToken,
  }
}
