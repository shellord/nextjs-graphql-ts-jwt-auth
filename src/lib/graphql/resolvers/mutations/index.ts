import { userResolvers } from '@/lib/graphql/resolvers/mutations/user'

export const Mutation = {
  ...userResolvers,
}
