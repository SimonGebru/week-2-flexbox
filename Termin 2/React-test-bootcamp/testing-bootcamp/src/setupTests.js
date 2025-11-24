// src/setupTests.js

import { expect, afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'
import * as matchers from '@testing-library/jest-dom/matchers'

// Lägg till jest-dom-matchers på Vitests expect
expect.extend(matchers)

// Rensa DOM efter varje test
afterEach(() => {
  cleanup()
})