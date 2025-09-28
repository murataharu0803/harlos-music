import { Center, Group, Image, Title, Text } from '@mantine/core'
import { useTranslation } from 'react-i18next'
import React, { Fragment } from 'react'

import star from '@/assets/images/star.svg'

const Layout: React.FC = () => {
  const { t } = useTranslation()

  const abouts = [
    'soundtrack',
    'film',
    'epic',
    'orchestral',
    'piano',
    'pop',
  ]

  const aboutTitles = abouts.map(about => t(about))

  const aboutText = t('about_desc').split('\n').map((line, i) =>
    <Fragment key={i}>{line}<br /></Fragment>)

  const AboutTitles = () => <Group>
    {aboutTitles.map((title, i) => <Fragment key={title}>
      {!!i && <Image src={star} alt="*" w={16} h={16} /> }
      <Title  order={3} lh={2}>{t(title)}</Title>
    </Fragment>)}
  </Group>

  return <Center id="home" mih="20vw" py="10vw"
    style={{ flexDirection: 'column', gap: '2vw' }}
  >
    <AboutTitles />
    <Text c="dimmed" ta="center" lh={2}>{aboutText}</Text>
  </Center>
}

export default Layout
