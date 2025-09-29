import { Center, Image, Title } from '@mantine/core'
import { useTranslation } from 'react-i18next'
import React from 'react'

import logoFull from '@/assets/images/logo-full.svg'

const Home: React.FC = () => {

  const { t } = useTranslation()

  return <Center id="home" bg="accent" h="100lvh" mih="20vw"
    style={{ flexDirection: 'column', gap: '2vw' }}
  >
    <Image src={logoFull} alt="HARLOS" w="40vw" h="auto" />
    <Title order={2} c="white">{t('harlos_music')}</Title>
  </Center>
}

export default Home
