import {
  Anchor, AppShell, Group,
  Image, Space, Stack, Title,
} from '@mantine/core'
import { useHeadroom } from '@mantine/hooks'
import { useTranslation } from 'react-i18next'
import React from 'react'

import Home from '@/components/sections/Home'
import About from '@/components/sections/About'

import logoFull from '@/assets/images/logo-full.svg'

const Layout: React.FC = () => {
  const { t } = useTranslation()

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
        <Title order={3} c="white">{t('harlos_music')}</Title>
        <Space flex="1 0 0" />
        <Anchor href="#about" c="white">{t('about')}</Anchor>
        <Anchor href="#about" c="white">{t('portfolio')}</Anchor>
        <Anchor href="#about" c="white">{t('commission')}</Anchor>
      </Group>
    </AppShell.Header>
    <AppShell.Main>
      <Stack pb="xl">
        <Home />
        <About />
      </Stack>
    </AppShell.Main>
  </AppShell>
}

export default Layout
