import Avatar from 'components/Avatar'
import { Character } from 'graphql/generated/graphql'

import * as S from './styles'

export type HomeProps = {
  characters?: Pick<Character, 'name' | 'image'>[]
}

const Home = ({ characters }: HomeProps) => (
  <S.Main>
    <S.Title>Rick and Morty Characters</S.Title>

    <S.Grid>
      {characters?.map(({ name, image }) => (
        <Avatar key={name} name={name} image={image} />
      ))}
    </S.Grid>
  </S.Main>
)

export default Home
