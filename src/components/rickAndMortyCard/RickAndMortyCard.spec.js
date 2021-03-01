import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import RickAndMortyCard from './RickAndMortyCard'

describe('RickAndMortyCard', () => {
  it('initially renders a name and a button', () => {
    render(
      <RickAndMortyCard
        name="Foo"
        img="https://source.unsplash.com/random/40x40"
        species="human"
      />
    )
    expect(screen.getByRole('heading', { name: 'Foo' })).toBeInTheDocument()
    expect(screen.getByRole('button')).toBeInTheDocument()
  })
  it('renders/unrenders an image and additional info on button click', () => {
    render(
      <RickAndMortyCard
        name="Foo"
        img="https://source.unsplash.com/random/40x40"
        species="human"
      />
    )
    expect(screen.queryByText(/species/i)).not.toBeInTheDocument()
    expect(screen.queryByRole('img')).not.toBeInTheDocument()
    userEvent.click(screen.getByRole('button'))
    expect(screen.queryByText(/species/i)).toBeInTheDocument()
    expect(screen.queryByRole('img')).toBeInTheDocument()
    userEvent.click(screen.getByRole('button'))
    expect(screen.queryByText(/species/i)).not.toBeInTheDocument()
    expect(screen.queryByRole('img')).not.toBeInTheDocument()
  })
  it('changes the buttons caption on click from "Show Details" to "Hide Details"', () => {
    render(
      <RickAndMortyCard
        name="Foo"
        img="https://source.unsplash.com/random/40x40"
        species="human"
      />
    )
    expect(
      screen.getByRole('button', { name: /show details/i })
    ).toBeInTheDocument()
    userEvent.click(screen.getByRole('button'))
    expect(
      screen.getByRole('button', { name: /hide details/i })
    ).toBeInTheDocument()
    expect(
      screen.queryByRole('button', { name: /show details/i })
    ).not.toBeInTheDocument()
  })
})
