import {
  AppShell, Box, Burger, Button, Center, Group,
  Image, Menu, Space, Stack, Title, useMantineTheme,
} from '@mantine/core'
import { useDisclosure, useWindowScroll } from '@mantine/hooks'
import { useTranslation } from 'react-i18next'
import React, { useState } from 'react'
import { IconGlobe } from '@tabler/icons-react'

import Home from '@/components/sections/Home'
import About from '@/components/sections/About'
import Portfolio from '@/components/sections/Portfolio'
import Commission from '@/components/sections/Commission'
import Footer from '@/components/sections/Footer'

import logoFull from '@/assets/images/logo-full-light.svg'
import star from '@/assets/images/star.svg'

const HEADER_HEIGHT = 80

const LangSelector: React.FC = () => {
  const theme = useMantineTheme()
  const [opened, setOpened] = useState(false)
  const { i18n } = useTranslation()

  const languageAction = (lng: string) => () => {
    i18n.changeLanguage(lng)
    window.history.replaceState(null, '', `/?lng=${lng}`)
    setOpened(false)
  }

  return <Menu
    transitionProps={{ transition: 'pop-bottom-right' }}
    position="bottom-end"
    offset={6}
    width={220}
    withinPortal
    radius="md"
    opened={opened} onChange={setOpened}
  >
    <Menu.Target>
      <Button bg="transparent" variant="subtle" p={0} w="100%" h="100%">
        <Center w="100%" h="100%">
          <IconGlobe
            size={24}
            style={{ verticalAlign: 'middle' }}
            color={theme.colors.dark[0]}
            stroke={1.5}
          />
        </Center>
      </Button>
    </Menu.Target>
    <Menu.Dropdown>
      <Menu.Item onClick={languageAction('zh-TW')}>中文(臺灣)</Menu.Item>
      <Menu.Item onClick={languageAction('en')}>English</Menu.Item>
    </Menu.Dropdown>
  </Menu>
}

const Layout: React.FC = () => {
  const { t } = useTranslation()
  const theme = useMantineTheme()

  const [scroll] = useWindowScroll()
  const [opened, { toggle }] = useDisclosure()

  const navLink = (to: string, label: string) => <Center
    h={HEADER_HEIGHT} p="md"
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
      height: HEADER_HEIGHT,
      collapsed: scroll.y < HEADER_HEIGHT,
      offset: false,
    }}
    navbar={{
      width: 240,
      breakpoint: 'sm',
      collapsed: { mobile: !opened, desktop: true },
    }}
  >
    <AppShell.Header className="header">
      <Group visibleFrom='sm' align="center" gap="0" wrap="nowrap">
        <Center h={HEADER_HEIGHT} px="32px"
          renderRoot={props => <a href="#home" {...props}/>}>
          <Image src={logoFull} alt="HARLOS" h={48} w="auto" />
        </Center>
        <Center><Title visibleFrom='md' order={3} px="md">{t('harlos_music')}</Title></Center>
        <Space flex="1 0 0" />
        {pages.map(page => navLink(page.to, page.label))}
        <Box h={HEADER_HEIGHT} w={HEADER_HEIGHT}><LangSelector /></Box>
      </Group>
      <Group hiddenFrom='sm' align="center" gap="0" wrap="nowrap">
        <Center onClick={toggle} style={{ cursor: 'pointer' }}
          h={HEADER_HEIGHT} w={HEADER_HEIGHT}>
          <Burger opened={opened} size={20} color={theme.colors.dark[0]} />
        </Center>
        <Center href="#home" flex="1 0 0" component="a">
          <Image src={logoFull} alt="HARLOS" h={40} w="auto" />
        </Center>
        <Center h={HEADER_HEIGHT} w={HEADER_HEIGHT}><LangSelector /></Center>
      </Group>
    </AppShell.Header>
    <AppShell.Navbar mt={HEADER_HEIGHT}>
      <Stack m="xl" gap="xl">
        {pages.map(page => navLink(page.to, page.label))}
      </Stack>
    </AppShell.Navbar>
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
