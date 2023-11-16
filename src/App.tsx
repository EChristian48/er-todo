import { MantineProvider, Title } from '@mantine/core'
import { theme } from './theme'
// Fonts
import '@fontsource-variable/plus-jakarta-sans'
// CSS
import '@mantine/core/styles.css'

function App() {
  return (
    <MantineProvider theme={theme}>
      <Title>er-Todo</Title>
    </MantineProvider>
  )
}

export default App
