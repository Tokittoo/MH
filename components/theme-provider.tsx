'use client'

import * as React from 'react'
import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
  useTheme,
} from 'next-themes'

function ThemeWatcher() {
  const { setTheme } = useTheme()

  React.useEffect(() => {
    const updateThemeBasedOnTime = () => {
      const hour = new Date().getHours()
      // Day time: 6 AM (inclusive) to 6 PM (exclusive) -> 06:00 to 17:59
      const isDay = hour >= 6 && hour < 18
      setTheme(isDay ? 'light' : 'dark')
    }

    updateThemeBasedOnTime()

    // Check periodically (every minute)
    const interval = setInterval(updateThemeBasedOnTime, 60000)

    return () => clearInterval(interval)
  }, [setTheme])

  return null
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      <ThemeWatcher />
      {children}
    </NextThemesProvider>
  )
}
