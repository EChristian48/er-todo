import { Button, Title, useMantineColorScheme } from '@mantine/core'

export const Todo = () => {
  const { toggleColorScheme } = useMantineColorScheme()

  return (
    <>
      <Title>er-Todo</Title>

      <Button onClick={toggleColorScheme}>Button</Button>
    </>
  )
}
