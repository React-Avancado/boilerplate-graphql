import { render, screen } from '@testing-library/react'

import Avatar from '.'

describe('<Avatar />', () => {
  it('should render with placeholders', () => {
    render(<Avatar />)

    expect(screen.getByRole('img')).toHaveAttribute(
      'src',
      'https://rickandmortyapi.com/api/character/avatar/19.jpeg'
    )

    expect(
      screen.getByRole('heading', { name: /Rick and Morty Character/i })
    ).toBeInTheDocument()
  })

  it('should render with passed values', () => {
    render(<Avatar image="/morty.jpg" name="Morty" />)

    expect(screen.getByRole('img')).toHaveAttribute('src', '/morty.jpg')
    expect(screen.getByRole('heading', { name: /Morty/i })).toBeInTheDocument()
  })
})
