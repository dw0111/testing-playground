import { render, screen } from '@testing-library/react'
import Card from './Card'

describe('Card', () => {
  it('renders the children prop', () => {
    render(<Card title="Foo" text="Bar" />)
    expect(screen.getByText(/foo/i)).toBeInTheDocument()
    expect(screen.getByText(/bar/i)).toBeInTheDocument()
  })
})
