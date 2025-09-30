import { Anchor, Center, Group, Image, Stack, Title, useMatches } from '@mantine/core'
import { useTranslation } from 'react-i18next'
import React from 'react'

import logoFull from '@/assets/images/logo-full.svg'
import icon from '@/assets/images/icon.svg'
import Divider from '@/components/Divider'
import {
  IconBrandTwitterFilled,
  IconBrandYoutubeFilled,
  IconCoffee,
  IconCoinFilled,
} from '@tabler/icons-react'

const Home: React.FC = () => {
  const { t } = useTranslation()
  const gap = useMatches({
    base: 24,
    sm: 48,
  })

  const pages = [
    { to: '#about', label: t('about') },
    { to: '#portfolio', label: t('portfolio') },
    { to: '#commission', label: t('commission') },
  ]

  return <Center id="home" bg="accent" h="100lvh" mih="20vw"
    style={{ flexDirection: 'column', gap: '2vw' }}
  >
    <Image src={logoFull} alt="HARLOS" w="40vw" h="auto" />
    <Divider />
    <Title order={2} c="white" mt="-24px">{t('harlos_music')}</Title>
    <Group my="xl" gap={gap}>
      {pages.map(page => (
        <Anchor key={page.to} href={page.to}>
          <Stack align="center">
            <Image src={icon} alt="*" w={{ base: 64, sm: 96 }} h={{ base: 64, sm: 96 }} />
            <Title order={5} c="white" fz={{ base: 'sm', sm: 'unset' }}>{page.label}</Title>
          </Stack>
        </Anchor>
      ))}
    </Group>
    <Group>
      <IconBrandYoutubeFilled size={24} color="white" style={{ cursor: 'pointer' }}
        onClick={() => window.open('https://www.youtube.com/@harlosmusic', '_blank')}
      />
      <IconBrandTwitterFilled size={24} color="white" style={{ cursor: 'pointer' }}
        onClick={() => window.open('https://twitter.com/harlosmusic', '_blank')}
      />
      <IconCoinFilled size={24} color="white" style={{ cursor: 'pointer' }}
        onClick={() => window.open('https://www.hivebee.com.tw/harlosmusic/Donate', '_blank')}
      />
      <IconCoffee size={24} color="white" style={{ cursor: 'pointer' }}
        onClick={() => window.open('https://ko-fi.com/harlosmusic', '_blank')}
      />
    </Group>
  </Center>
}

export default Home
