// src/components/Hello/Hello.test.jsx

// Vitest-funktioner för att beskriva och göra assertioner
import { describe, it, expect } from 'vitest'
// RTL-funktioner för att rendera och fråga efter element i DOM
import { render, screen } from '@testing-library/react'

import Hello from './Hello'

describe('Hello-komponenten', () => {
  it('visar texten "Hello world"', () => {
    // ARRANGE: rendera komponenten i testets DOM
    render(<Hello />)

    // ACT: (ingen interaktion här, komponenten visar bara text direkt)

    // ASSERT: kontrollera att "Hello world" finns i dokumentet
    // Här letar vi efter en rubrik (heading) med texten "Hello world"
    const heading = screen.getByRole('heading', { name: /hello world/i })

    // Vi förväntar oss att rubriken finns i DOM:en
    expect(heading).toBeInTheDocument()
  })
})