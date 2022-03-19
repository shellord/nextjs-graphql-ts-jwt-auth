import { Resolvers } from '@/generated'

import type { Context } from '@/lib/graphql/context'
import { createUser } from '@/lib/services/user'

export const resolvers: Resolvers<Context> = {
  Query: {
    users: async (_parent, _args, ctx) => {
      return await ctx.prisma.user.findMany()
    },
  },
  Mutation: {
    createUser: async (_parent, args, ctx) => {
      return await createUser(args, ctx)
    },
  },
}
