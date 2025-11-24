// src/components/CapitalizeInput/CapitalizeInput.test.jsx
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import CapitalizeInput from './CapitalizeInput'

describe('CapitalizeInput-komponenten', () => {
  it('gör första bokstaven stor när användaren skriver bokstäver', async () => {
    render(<CapitalizeInput />)

    // Hitta input via labeln "Text"
    const input = screen.getByLabelText(/text/i)

    // Skriv "pelle" i fältet (simulerar en riktig användare)
    await userEvent.type(input, 'pelle')

    // Första bokstaven ska nu vara versal
    expect(input).toHaveValue('Pelle')

    // Det ska inte finnas något felmeddelande
    expect(screen.queryByRole('alert')).toBeNull()
  })

  it('fungerar med svenska bokstäver (å/ä/ö)', async () => {
    render(<CapitalizeInput />)

    const input = screen.getByLabelText(/text/i)

    await userEvent.type(input, 'åke')

    expect(input).toHaveValue('Åke')
    expect(screen.queryByRole('alert')).toBeNull()
  })

  it('visar felmeddelande om användaren skriver något annat än bokstäver', async () => {
    render(<CapitalizeInput />)

    const input = screen.getByLabelText(/text/i)

    // "p3" innehåller en siffra → ogiltigt enligt våra regler
    await userEvent.type(input, 'p3')

    const error = screen.getByRole('alert')
    expect(error).toHaveTextContent(/endast bokstäver är tillåtna/i)
  })
})