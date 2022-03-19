import { Resolvers } from '@/generated'

import type { Context } from '@/lib/graphql/context'

export const resolvers: Resolvers<Context> = {
  Query: {
    users: async (_parent, _args, ctx) => {
      return await ctx.prisma.user.findMany()
    },
  },
  Mutation: {
    createUser: async (_parent, args, ctx) => {
      return await ctx.prisma.user.create({
        data: {
          ...args,
        },
      })
    },
  },
}
