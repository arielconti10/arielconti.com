import { render, screen } from '@testing-library/react'

import { Footer } from '.'

describe('<Footer />', () => {
  it('should have correct github profile', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: /@arielconti10/i })).toBeInTheDocument()
  })

  it('should have correct URL', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: /@arielconti10/i })).toHaveAttribute(
      'href',
      'https://github.com/arielconti10',
    )
  })
})
