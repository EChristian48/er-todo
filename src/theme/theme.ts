import { createTheme, mergeThemeOverrides } from '@mantine/core'
import { themeColor } from './colors'

const themeTypography = createTheme({
  fontFamily: 'Plus Jakarta Sans Variable, sans-serif',
  headings: {
    fontFamily: 'Lexend Variable, sans-serif',
  },
})

export const theme = mergeThemeOverrides(themeTypography, themeColor)
