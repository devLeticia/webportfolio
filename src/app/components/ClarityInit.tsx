'use client'

import Clarity from '@microsoft/clarity'
import { useEffect } from 'react'

export default function ClarityInit() {
  useEffect(() => {
    if (!process.env.NEXT_PUBLIC_CLARITY_ID) {
      console.warn('Warning: NEXT_PUBLIC_CLARITY_ID is not set. Microsoft Clarity will not be initialized.')
      return
    }
    Clarity.init(process.env.NEXT_PUBLIC_CLARITY_ID)
  }, [])

  return null
}
