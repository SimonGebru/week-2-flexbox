// src/components/Counter/Counter.test.jsx
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Counter from './Counter'

describe('Counter-komponenten', () => {
  it('visar startvärdet 1 när komponenten renderas', () => {
    render(<Counter />)

    const increaseButton = screen.getByRole('button', { name: /öka/i })
    const decreaseButton = screen.getByRole('button', { name: /minska/i })

    expect(increaseButton).toBeInTheDocument()
    expect(decreaseButton).toBeInTheDocument()

    // Startvärdet ska vara 1
    const value = screen.getByText('1')
    expect(value).toBeInTheDocument()
  })

  it('ökar värdet med 1 när man klickar på "Öka"', async () => {
    render(<Counter />)

    const increaseButton = screen.getByRole('button', { name: /öka/i })

    // Innan klick: 1
    expect(screen.getByText('1')).toBeInTheDocument()

    // Ett klick → 2
    await userEvent.click(increaseButton)
    expect(screen.getByText('2')).toBeInTheDocument()

    // Ett klick till → 3
    await userEvent.click(increaseButton)
    expect(screen.getByText('3')).toBeInTheDocument()
  })

  it('minskar värdet med 1 när man klickar på "Minska"', async () => {
    render(<Counter />)

    const decreaseButton = screen.getByRole('button', { name: /minska/i })

    // Start: 1
    expect(screen.getByText('1')).toBeInTheDocument()

    // Ett klick på "Minska" → 0
    await userEvent.click(decreaseButton)
    expect(screen.getByText('0')).toBeInTheDocument()

    // Ett klick till → -1
    await userEvent.click(decreaseButton)
    expect(screen.getByText('-1')).toBeInTheDocument()
  })

  it('kan öka och sedan minska igen (kombinerad logik)', async () => {
    render(<Counter />)

    const increaseButton = screen.getByRole('button', { name: /öka/i })
    const decreaseButton = screen.getByRole('button', { name: /minska/i })

    // Start: 1
    expect(screen.getByText('1')).toBeInTheDocument()

    // Öka → 2
    await userEvent.click(increaseButton)
    expect(screen.getByText('2')).toBeInTheDocument()

    // Minska → 1 igen
    await userEvent.click(decreaseButton)
    expect(screen.getByText('1')).toBeInTheDocument()
  })
})