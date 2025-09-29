import React from 'react'

import { Box, Center, Image } from '@mantine/core'

import starWhite from '@/assets/images/star-white.svg'
import star from '@/assets/images/star.svg'

const Divider: React.FC = () => {
  return <Center><Box pos="relative" mt="16px" mb="48px"
    h="4px" w="480px" maw="100%" bg="white">
    <Image src={starWhite} alt="*" w={24} h={24}
      pos="absolute" top={-10} left={-10}
    />
    <Image src={starWhite} alt="*" w={24} h={24}
      pos="absolute" top={-10} right={-10}
    />
  </Box></Center>
}

const Accent: React.FC = () => {
  return <Center><Box pos="relative" mt="16px" mb="48px"
    h="4px" w="480px" maw="100%" bg="accent">
    <Image src={star} alt="*" w={24} h={24}
      pos="absolute" top={-10} left={-10}
    />
    <Image src={star} alt="*" w={24} h={24}
      pos="absolute" top={-10} right={-10}
    />
  </Box></Center>
}

export default Divider

export { Accent as DividerAccent }
