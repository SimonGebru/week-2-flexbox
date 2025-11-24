// src/components/OnOff/OnOff.test.jsx
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import OnOff from './OnOff'

describe('OnOff-komponenten', () => {
  it('visar "on" när komponenten renderas första gången', () => {
    render(<OnOff />)

    // Hitta knappen genom dess roll + text
    const button = screen.getByRole('button', { name: /on/i })

    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent('on')
  })

  it('byter från "on" till "off" vid första klicket', async () => {
    render(<OnOff />)
    const button = screen.getByRole('button', { name: /on/i })

    await userEvent.click(button)

    // Efter ett klick ska texten ha växlat till "off"
    expect(button).toHaveTextContent('off')
  })

  it('byter tillbaka till "on" vid nästa klick', async () => {
    render(<OnOff />)
    const button = screen.getByRole('button', { name: /on/i })

    // Första klicket: on -> off
    await userEvent.click(button)
    // Andra klicket: off -> on
    await userEvent.click(button)

    expect(button).toHaveTextContent('on')
  })
})