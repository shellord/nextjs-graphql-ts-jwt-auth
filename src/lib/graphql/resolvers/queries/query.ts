import { QueryResolvers } from '@/generated/'

import { generateAccessToken, generateRefreshToken } from '@/lib/hash'

export const Query: QueryResolvers = {
  users: async (_parent, _args, ctx) => {
    return await ctx.prisma.user.findMany()
  },
  refresh: async (_parent, _args, ctx) => {
    const accessToken = generateAccessToken(ctx.user)
    const refreshToken = generateRefreshToken(ctx.user)
    return {
      accessToken,
      refreshToken,
    }
  },
}
