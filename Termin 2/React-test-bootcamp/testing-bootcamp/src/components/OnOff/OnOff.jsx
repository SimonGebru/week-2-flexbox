// src/components/OnOff/OnOff.jsx
import { useState } from 'react'

// Enkel komponent med en knapp som växlar mellan "on" och "off".
function OnOff() {
  // true = on, false = off
  const [isOn, setIsOn] = useState(true)

  const handleClick = () => {
    // toggla värdet: true -> false, false -> true
    setIsOn((prev) => !prev)
  }

  return (
    <button type="button" onClick={handleClick}>
      {isOn ? 'on' : 'off'}
    </button>
  )
}

export default OnOff