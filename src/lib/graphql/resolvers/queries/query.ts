import { QueryResolvers } from '@/generated/'

export const Query: QueryResolvers = {
  users: async (_parent, _args, ctx) => {
    return await ctx.prisma.user.findMany()
  },
}
