import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { FinancialCreditCard } from './FinancialCreditCard'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FinancialCreditCard />
  </StrictMode>
)
