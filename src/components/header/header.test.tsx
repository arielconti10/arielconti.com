import { render, screen } from '@testing-library/react'

import { Header } from '.'

describe('<Header />', () => {
  it('should render Header', () => {
    render(<Header />)
  })
})
