// src/components/Counter/Counter.jsx
import { useState } from 'react'

// Räknare med två knappar:
// - "Öka" ökar värdet med 1
// - "Minska" minskar värdet med 1
function Counter() {
  const [count, setCount] = useState(1) // startvärde 1 (som i uppgiften)

  const handleIncrease = () => {
    setCount((prev) => prev + 1)
  }

  const handleDecrease = () => {
    setCount((prev) => prev - 1)
  }

  return (
    <section>
      <button type="button" onClick={handleIncrease}>
        Öka
      </button>

      {/* Visar aktuellt värde */}
      <span>{count}</span>

      <button type="button" onClick={handleDecrease}>
        Minska
      </button>
    </section>
  )
}

export default Counter