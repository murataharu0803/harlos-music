import {
  Anchor,
  AppShell, Center, Group,
  Image, Space, Stack, Title,
} from '@mantine/core'
import { useHeadroom } from '@mantine/hooks'
import React from 'react'

import logoFull from './assets/images/logo-full.svg'

const Layout: React.FC = () => {
  const pinned = useHeadroom({ fixedAt: 80 })

  return <AppShell
    header={{
      height: 80,
      collapsed: pinned,
      offset: false,
    }}
  >
    <AppShell.Header px="xl" py="md" bg="accent" c="white">
      <Group align="center" gap="xl">
        <Image src={logoFull} alt="HARLOS" h={48} w="auto" />
        <Title order={3} c="white">哈洛斯音樂</Title>
        <Space flex="1 0 0" />
        <Anchor href="#about" c="white">關於我</Anchor>
        <Anchor href="#about" c="white">作品集</Anchor>
        <Anchor href="#about" c="white">委託</Anchor>
      </Group>
    </AppShell.Header>

    <AppShell.Main>
      <Stack pb="xl">
        <Center bg="accent" h="100lvh" mih="20vw">
          <Image src={logoFull} alt="HARLOS" w="40vw" h="auto" />
        </Center>

        <Center h="100lvh"><Title order={2}>CONTENT</Title></Center>
      </Stack>
    </AppShell.Main>
  </AppShell>
}

export default Layout
