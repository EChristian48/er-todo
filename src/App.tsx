import { MantineProvider, Title } from "@mantine/core";
// CSS imports
import "@mantine/core/styles.css";

function App() {
  return (
    <MantineProvider>
      <Title>er-Todo</Title>
    </MantineProvider>
  );
}

export default App;
