import { MantineProvider } from '@mantine/core'
import { Todo } from './Todo'
import { theme } from './theme'
// Fonts
import '@fontsource-variable/plus-jakarta-sans'
// CSS
import '@mantine/core/styles.layer.css'

function App() {
  return (
    <MantineProvider theme={theme}>
      <Todo />
    </MantineProvider>
  )
}

export default App
