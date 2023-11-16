import {
  Box,
  Button,
  Center,
  Title,
  useMantineColorScheme,
} from '@mantine/core'

export const Todo = () => {
  const { toggleColorScheme } = useMantineColorScheme()

  return (
    <Center mih="100vh" w="100vw" style={{ flexDirection: 'column' }}>
      <Title>er-Todo</Title>

      <Button onClick={toggleColorScheme}>Button</Button>

      <Box w="min(400px, 100%)" bg="sunrise-yellow" mih="200px"></Box>
    </Center>
  )
}
