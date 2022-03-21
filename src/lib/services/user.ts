import { SignupMutationVariables } from '@/generated'

import type { Context } from '@/lib/graphql/context'
import {
  comparePassword,
  generateAccessToken,
  generateRefreshToken,
  hashPassword,
} from '@/lib/hash'

export const createUser = async (
  { name, email, password }: SignupMutationVariables,
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

export const loginUser = async ({ email, password }: any, ctx: Context) => {
  const user = await ctx.prisma.user.findFirst({
    where: {
      email,
    },
  })
  if (!user) {
    throw new Error('No user found')
  }
  const isValid = comparePassword(password, user.password)
  if (!isValid) {
    throw new Error('Invalid password')
  }
  const accessToken = generateAccessToken(user.id)
  const refreshToken = generateRefreshToken(user.id)
  return {
    accessToken: accessToken,
    refreshToken: refreshToken,
  }
}
