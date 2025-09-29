import { Center, Text } from '@mantine/core'
import { useTranslation } from 'react-i18next'
import React, { Fragment } from 'react'


const Footer: React.FC = () => {
  const { t } = useTranslation()
  const footerText = t('footerText').split('\n').map((line, i) =>
    <Fragment key={i}>{line}<br /></Fragment>)

  return <Center id="footer" bg="dark" c="white" py="4vw"
    style={{ flexDirection: 'column', gap: '2vw' }}
  >
    <Text ta="center" size="xs">{footerText}</Text>
  </Center>
}

export default Footer
