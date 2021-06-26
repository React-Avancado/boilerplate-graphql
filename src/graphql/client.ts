import { GraphQLClient } from 'graphql-request'

const endpoint = process.env.GRAPHQL_HOST || ''

// If your API needs an authorization, use like this

// const client = new GraphQLClient(endpoint, {
//   headers: {
//     authorization: `Bearer ${process.env.GRAPHQL_TOKEN}`
//   }
// })

const client = new GraphQLClient(endpoint)

export default client
