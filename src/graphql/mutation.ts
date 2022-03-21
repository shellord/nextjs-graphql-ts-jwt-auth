import { gql } from '@apollo/client'

export const CREATE_USER = gql`
  mutation Signup($name: String!, $email: String!, $password: String!) {
    signup(name: $name, email: $email, password: $password) {
      accessToken
      refreshToken
    }
  }
`
