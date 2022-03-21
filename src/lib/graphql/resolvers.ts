import { Resolvers } from '@/generated'

import { Mutation } from '@/lib/graphql/resolvers/mutations'
import { Query } from '@/lib/graphql/resolvers/queries/query'

export const resolvers: Resolvers = {
  Query,
  Mutation,
}
