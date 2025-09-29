import React from 'react'
import {
  Affix, Center, Group, Stack, Image, Overlay, MantineStyleProp,
} from '@mantine/core'

import star from '@/assets/images/star.svg'

import '@/assets/styles/loadingStars.sass'

interface LoadingScreenProps { style: MantineStyleProp }

const LoadingScreen: React.FC<LoadingScreenProps> = ({ style }) => {
  return <Affix className="loading" style={style}
    position={{ top: 0, left: 0, right: 0, bottom: 0 }} zIndex={9999}>
    <Center w="100%" h="100%">
      <Overlay opacity={.8} color="#fff" zIndex={-1} bg="white"/>
      <Stack p="32px 64px" bd="4px solid #4b3f26" bg="white">
        <Group gap="md" justify="center">
          <Image className="star1" src={star} alt="*" w={32} h={32} />
          <Image className="star2" src={star} alt="*" w={32} h={32} />
          <Image className="star3" src={star} alt="*" w={32} h={32} />
          <Image className="star4" src={star} alt="*" w={32} h={32} />
        </Group>
      </Stack>
    </Center>
  </Affix>
}

export default LoadingScreen
