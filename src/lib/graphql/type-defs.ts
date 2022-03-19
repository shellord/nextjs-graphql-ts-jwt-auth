import { gql } from 'apollo-server-micro'

export const typeDefs = gql`
  type Token {
    accessToken: String!
    refreshToken: String!
  }
  type User {
    id: ID!
    name: String!
    email: String!
    password: String!
  }
  type Query {
    users: [User!]!
  }
  type Mutation {
    createUser(name: String!, email: String!, password: String!): Token!
  }
`
