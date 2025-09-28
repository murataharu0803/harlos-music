import { Affix, Button, Center, Text, Title } from '@mantine/core'
import { ErrorBoundary } from 'react-error-boundary'

import Layout from '@/Layout'

const App = () => {
  return <ErrorBoundary
    fallbackRender={({ error, resetErrorBoundary }) => {
      const fullErrorMessage = error instanceof Error
        ? error.stack || error.message
        : String(error)
      return <Affix>
        <Center w="100vw" h="100lvh" pos="absolute" style={{ flexDirection: 'column' }}>
          <Title order={1} mb="md">Error</Title>
          <Text style={{ whiteSpace: 'pre-wrap' }}>
            {fullErrorMessage}
          </Text>
          <Button onClick={resetErrorBoundary} mt="md" >
            Back
          </Button>
        </Center>
      </Affix>
    }}
  >
    <Layout />
  </ErrorBoundary>
}

export default App
