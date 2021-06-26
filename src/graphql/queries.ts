import { gql } from 'graphql-request'

export const GET_CHARACTERS = gql`
  query getCharacters {
    characters {
      results {
        name
        image
      }
    }
  }
`
