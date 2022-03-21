import { MutationResolvers } from '@/generated'

import { Context } from '@/lib/graphql/context'
import { createUser, loginUser } from '@/lib/services/user'

export const userResolvers: MutationResolvers<Context> = {
  signup: async (_parent, args, ctx) => {
    return await createUser(args, ctx)
  },
  login: async (_parent, args, ctx) => {
    return await loginUser(args, ctx)
  },
}
