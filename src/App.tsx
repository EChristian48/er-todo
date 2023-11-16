import { MantineProvider, Title } from "@mantine/core";
// Fonts
import "@fontsource-variable/plus-jakarta-sans";
// CSS
import "@mantine/core/styles.css";

function App() {
  return (
    <MantineProvider>
      <Title>er-Todo</Title>
    </MantineProvider>
  );
}

export default App;
