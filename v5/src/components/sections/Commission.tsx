import { Box, Container, Stepper, Title, Image } from '@mantine/core'
import { useTranslation } from 'react-i18next'
import React, { useState } from 'react'

import IconSvg from '@/assets/images/icon.svg'
import { DividerAccent } from '@/components/Divider'

const steps = [
  'discussion',
  'deposit',
  'draft',
  'complete',
  'after',
]

const Commission: React.FC = () => {
  const { t } = useTranslation()
  const [active, setActive] = useState(1)

  return <Box>
    <Container id="commission" maw="640px" py="10vw" px="xl">
      <Title order={2} ta="center">{t('commission')}</Title>
      <DividerAccent />
      <Stepper
        active={active}
        onStepClick={setActive}
        orientation="vertical"
        completedIcon={<Image src={IconSvg} alt="HARLOS" w={40} h={40} />}
      >
        {steps.map(step => <Stepper.Step
          key={step} label={t(step)}
          styles={{
            stepDescription: { lineHeight: 1.5, marginBottom: '1rem' },
          }}
          description={t(`${step}Desc`)}
        />)}
      </Stepper>
    </Container>
  </Box>
}

export default Commission
