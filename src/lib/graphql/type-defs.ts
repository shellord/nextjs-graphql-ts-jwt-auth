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
    posts: [Post!]!
  }

  type Post {
    id: ID!
    title: String!
    content: String!
    author: User!
  }

  type Query {
    users: [User!]!
    refresh: Token
    posts: [Post!]!
  }

  type Mutation {
    signup(name: String!, email: String!, password: String!): Token
    login(email: String!, password: String!): Token
    createPost(title: String!, content: String!): Post
    editPost(id: ID!, title: String!, content: String!): Post
    deletePost(id: ID!): Boolean
  }
`
