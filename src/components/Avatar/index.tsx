import { Character } from 'graphql/generated/graphql'
import Image from 'next/image'

import * as S from './styles'

export type AvatarProps = Pick<Character, 'name' | 'image'>

const placeholderImage =
  'https://rickandmortyapi.com/api/character/avatar/19.jpeg'

const placeholderName = 'Rick and Morty Character'

const Avatar = ({ name, image }: AvatarProps) => (
  <S.Wrapper>
    <Image
      src={image || placeholderImage}
      width={300}
      height={300}
      alt={name || placeholderName}
    />
    <S.Title>{name || placeholderName}</S.Title>
  </S.Wrapper>
)

export default Avatar
