import { render, screen } from '@testing-library/react'

import Home from '.'

describe('<Home />', () => {
  it('should render the heading', () => {
    render(<Home />)

    expect(
      screen.getByRole('heading', { name: /Rick and Morty Characters/i })
    ).toBeInTheDocument()
  })

  it('should render characters', () => {
    const characters = [
      {
        name: 'Ricky',
        image: '/ricky.jpg'
      },
      {
        name: 'Morty',
        image: '/morty.jpg'
      }
    ]

    render(<Home characters={characters} />)

    expect(screen.getAllByRole('img')).toHaveLength(2)
  })
})
