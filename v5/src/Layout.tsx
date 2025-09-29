import {
  Anchor,
  AppShell, Center, Group,
  Image, Space, Stack, Title,
} from '@mantine/core'
import { useHeadroom, useWindowScroll } from '@mantine/hooks'
import { useTranslation } from 'react-i18next'
import React from 'react'

import Home from '@/components/sections/Home'
import About from '@/components/sections/About'
import Portfolio from '@/components/sections/Portfolio'
import Commission from '@/components/sections/Commission'
import Footer from '@/components/sections/Footer'

import logoFull from '@/assets/images/logo-full-light.svg'
import star from '@/assets/images/star.svg'

const Layout: React.FC = () => {
  const { t } = useTranslation()

  const pinned = useHeadroom({ fixedAt: 80 })
  const [scroll] = useWindowScroll()

  const navLink = (to: string, label: string) => <Center
    key={to} renderRoot={props => <a href={to} {...props}/>}
  >
    <Image src={star} alt="*" w={16} h={16} mr="xs" />{label}
  </Center>

  const pages = [
    { to: '#about', label: t('about') },
    { to: '#portfolio', label: t('portfolio') },
    { to: '#commission', label: t('commission') },
  ]

  return <AppShell
    header={{
      height: 80,
      collapsed: !pinned || scroll.y < 80,
      offset: false,
    }}
  >
    <AppShell.Header px="xl" py="md">
      <Group align="stretch" gap="xl">
        <Anchor href="#home">
          <Image src={logoFull} alt="HARLOS" h={48} w="auto" />
        </Anchor>
        <Center><Title order={3}>{t('harlos_music')}</Title></Center>
        <Space flex="1 0 0" />
        {pages.map(page => navLink(page.to, page.label))}
      </Group>
    </AppShell.Header>
    <AppShell.Main>
      <Stack pb="xl">
        <Home />
        <About />
        <Portfolio />
        <Commission />
      </Stack>
      <Footer />
    </AppShell.Main>
  </AppShell>
}

export default Layout
