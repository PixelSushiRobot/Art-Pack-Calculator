'use client'

import dynamic from 'next/dynamic'

// Dynamically import the calculator component with no SSR
const TezFormulaCalculator = dynamic(
  () => import('@/components/TezFormulaCalculator'),
  { ssr: false }
)

export default function Home() {
  return (
    <main>
      <TezFormulaCalculator />
    </main>
  )
}