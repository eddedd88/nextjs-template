import { render, screen } from '@testing-library/react'
import Home from '@/pages/index'

it('renders the app', () => {
  render(<Home />)
  expect(screen.getByText('Hello Next.js')).toBeInTheDocument()
})
