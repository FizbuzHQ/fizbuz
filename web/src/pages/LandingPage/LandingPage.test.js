import { render, cleanup } from '@testing-library/react'

import LandingPage from './LandingPage'

describe('LandingPage', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<LandingPage />)
    }).not.toThrow()
  })
})
