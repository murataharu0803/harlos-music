import { Box, Container, Stepper, Title, Image, Collapse } from '@mantine/core'
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

  return <Box pos="relative">
    <Box id="commission" pos="absolute" top="-80px"/>
    <Container maw="640px" py="10vw" px="xl">
      <Title order={2} ta="center">{t('commission')}</Title>
      <DividerAccent />
      <Stepper
        active={active}
        onStepClick={setActive}
        orientation="vertical"
        completedIcon={<Image src={IconSvg} alt="HARLOS" w={40} h={40} />}
      >
        {steps.map((step, i) => <Stepper.Step
          key={step} label={t(step)}
          styles={{
            stepLabel: { marginTop: '0.7em' },
            stepDescription: { lineHeight: 1.5, marginBottom: '1rem' },
          }}
          description={<Collapse in={i === active}>{t(`${step}Desc`)}</Collapse>}
        />)}
      </Stepper>
    </Container>
  </Box>
}

export default Commission
