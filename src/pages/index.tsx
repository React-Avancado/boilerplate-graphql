import Home, { HomeProps } from 'templates/Home'

import client from 'graphql/client'
import { GetCharactersQuery } from 'graphql/generated/graphql'
import { GET_CHARACTERS } from 'graphql/queries'

export default function Index({ characters }: HomeProps) {
  return <Home characters={characters} />
}

export const getStaticProps = async () => {
  const { characters } = await client.request<GetCharactersQuery>(
    GET_CHARACTERS
  )

  return {
    revalidate: 60,
    props: {
      characters: characters?.results
    }
  }
}
