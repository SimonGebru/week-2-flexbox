// src/components/CapitalizeInput/CapitalizeInput.jsx
import { useState } from 'react'

// Komponent som:
// - har ett textfält
// - gör första bokstaven stor automatisk
// - visar felmeddelande om något annat än bokstäver skrivs
function CapitalizeInput() {
  const [value, setValue] = useState('')
  const [error, setError] = useState('')

  const handleChange = (event) => {
    const raw = event.target.value

    // Om fältet töms: ta bort både text och ev. felmeddelande
    if (raw === '') {
      setValue('')
      setError('')
      return
    }

    // Tillåter bara bokstäver (inkl. å, ä, ö) – enkelt regex
    const lettersOnly = /^[a-zåäöA-ZÅÄÖ]+$/u

    if (!lettersOnly.test(raw)) {
      // Ogiltigt tecken → visa felmeddelande
      setError('Endast bokstäver är tillåtna')
      setValue(raw) // låt användaren se vad hen skrev
      return
    }

    // Giltig text → gör första bokstaven stor, resten behålls
    const capitalized = raw[0].toUpperCase() + raw.slice(1)

    setValue(capitalized)
    setError('')
  }

  return (
    <div>
      <label htmlFor="capitalize-input">Text</label>
      <input
        id="capitalize-input"
        type="text"
        value={value}
        onChange={handleChange}
      />

      {/* Visas bara om vi har ett felmeddelande */}
      {error && (
        <p role="alert">
          {error}
        </p>
      )}
    </div>
  )
}

export default CapitalizeInput