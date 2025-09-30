import React from 'react'
import {
  Affix, Center, Group, Stack, Image, Overlay, MantineStyleProp,
  useMantineTheme,
} from '@mantine/core'

import star from '@/assets/images/star.svg'

import '@/assets/styles/loadingStars.sass'

interface LoadingScreenProps { style: MantineStyleProp }

const LoadingScreen: React.FC<LoadingScreenProps> = ({ style }) => {
  const theme = useMantineTheme()

  const starSize = { base: 24, sm: 32 }

  return <Affix className="loading" style={style}
    position={{ top: 0, left: 0, right: 0, bottom: 0 }} zIndex={9999}>
    <Center w="100%" h="100%">
      <Overlay opacity={.8} color="#fff" zIndex={-1} bg="white"/>
      <Stack p={{ base: '24px 48px', sm: '32px 64px' }}
        bd={`4px solid ${theme.colors.dark[0]}`} bg="white">
        <Group gap="md" justify="center">
          <Image className="star1" src={star} alt="*" w={starSize} h={starSize} />
          <Image className="star2" src={star} alt="*" w={starSize} h={starSize} />
          <Image className="star3" src={star} alt="*" w={starSize} h={starSize} />
          <Image className="star4" src={star} alt="*" w={starSize} h={starSize} />
        </Group>
      </Stack>
    </Center>
  </Affix>
}

export default LoadingScreen
