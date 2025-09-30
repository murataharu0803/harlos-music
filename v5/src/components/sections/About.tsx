import { Center, Group, Image, Title, Text, Box, Stack } from '@mantine/core'
import { useTranslation } from 'react-i18next'
import React, { Fragment } from 'react'

import starSvg from '@/assets/images/star.svg'

const About: React.FC = () => {
  const { t } = useTranslation()

  const abouts = [
    'soundtrack',
    'film',
    'epic',
    'orchestral',
    'piano',
    'pop',
  ]

  const aboutsMobile = [
    [ 'soundtrack', 'film' ],
    [ 'epic', 'orchestral' ],
    [ 'piano', 'pop' ],
  ]

  const aboutTitles = abouts.map(about => t(about))

  const aboutText = t('about_desc').split('\n').map((line, i) =>
    <Fragment key={i}>{line}<br /></Fragment>)

  const star = <Image src={starSvg} alt="*" w={16} h={16} />

  const AboutTitles = () => <Group visibleFrom='sm'>
    {aboutTitles.map(title => <Fragment key={title}>
      {star}
      <Title order={3}>{t(title)}</Title>
    </Fragment>)}{star}
  </Group>

  const AboutTitlesMobile = () => <Stack gap="sm" align="center">{
    aboutsMobile.map((row, i) =>
      <Group key={i} hiddenFrom='sm' gap="sm">
        {row.map(title => <Fragment key={title}>
          {star}
          <Title order={3} lh={1.25}>{t(title)}</Title>
        </Fragment>)}{star}
      </Group>,
    )
  }</Stack>

  return <Center pos="relative" mih="20vw" py="10vw"
    style={{ flexDirection: 'column', gap: '2vw' }}
  >
    <Box id="about" pos="absolute" top="-80px"/>
    <AboutTitles />
    <AboutTitlesMobile />
    <Text c="dimmed" ta="center" mt="md" lh={2}>{aboutText}</Text>
  </Center>
}

export default About
