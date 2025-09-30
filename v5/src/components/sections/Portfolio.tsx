import { Box, Button, Container, Grid, Title, Text, Collapse } from '@mantine/core'
import { useTranslation } from 'react-i18next'
import React, { useState } from 'react'
import useData, { PortfolioWork, Sheet, Tags } from '@/hooks/useData'

import Work from '@/components/Work'
import Divider from '@/components/Divider'
import { IconCaretDownFilled } from '@tabler/icons-react'

const Section: React.FC<{
  works: PortfolioWork[],
  tags: Tags[],
  type?: string,
  lang: string,
}> = ({ works, tags, type, lang }) => {
  const [open, setOpen] = useState(!type)

  if (works.length === 0) return null

  return <>
    {!!type && <Title
      order={3} c="white" ta="center" mb="md"
      style={{ cursor: 'pointer' }}
      onClick={() => setOpen(o => !o)}
    >
      {type}
      <IconCaretDownFilled
        size={20}
        style={{
          verticalAlign: 'middle',
          marginLeft: '8px',
          transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
          transition: 'transform 200ms ease-in-out',
        }}
      />
    </Title>}
    <Collapse in={open}>
      <Grid justify="center" mb="64px">
        {works.map((work, index) =>
          <Grid.Col span={{ base: 12, xs: 6, sm: 4 }} key={index}>
            <Work {...work} tagsText={
              work.tags?.map(tg => tags.find(tag => tag.id === tg)?.[lang] || tg) || []
            }/>
          </Grid.Col>,
        )}
      </Grid>
    </Collapse>
  </>
}

const defaultWorks: PortfolioWork[] = [
  { type: 'original', name: 'Origin of the Winds 風の起源', display: true,
    youtube: 'keNRuTFXM6M', musescore: '10383688', tags: ['windband', 'original'] },
  { type: 'original', name: '神木 Sacred Tree', display: true,
    youtube: 'S1-8Tb9aSQg', tags: ['piano', 'strings', 'original'] },
  { type: 'original', name: 'Dreamland Carnival 夢隙中的嘉年華', display: true,
    soundcloud: 'dreamland-carnival', tags: ['orchestra', 'original', 'vtuber'] },
  { type: 'original', name: '壹仟零壹拾玖夜 One thousand and nineteen nights', display: true,
    youtube: 'dg9DvXDGQ9I', tags: ['citypop', 'pop', 'original'] },
  { type: 'orchestraarr', name: 'The Phoenix (Orchestral Suite from Takanashi Kiara) 2024 Remake', display: true,
    artist: 'Takanashi Kiara', youtube: '-1Sv_l-MAec', tags: ['orchestra', 'arrangement'] },
  { type: 'orchestraarr', name: '3 MILLION SUBSCRIBERS 3 MILLION NOTES', display: true,
    artist: 'Sheet Music Boss', youtube: 'Xmg3N5rk464', musescore: '12686935', tags: ['orchestra', 'arrangement'] },
  { type: 'pianoarr', name: 'KINGWORLD', display: true,
    artist: 'sasakure.UK / 白上フブキ', youtube: 'D0az5_0lpFc', musescore: '16191199', tags: ['piano', 'arrangement', 'vtuber'] },
  { type: 'pianoarr', name: '僕が死のうと思うたのは The Reason Why I thought I\'d die', display: true,
    artist: 'amazarashi', youtube: '4cU4D4lgWQ8', musescore: '5163003', tags: ['piano', 'arrangement'] },
  { type: 'accomp', name: '心做し (kokoronashi)', display: true,
    artist: 'papiyon (蝶々P)', youtube: 'oq0SiF6CWWE', musescore: '9580435', tags: ['piano', 'strings', 'arrangement', 'accompany'] },
]

const Portfolio: React.FC = () => {
  const { t, i18n } = useTranslation()
  const lang = i18n.resolvedLanguage || 'en'

  const works = useData(Sheet.PORTFOLIO)
  const workTypes = useData(Sheet.WORKTYPES)
  const tags = useData(Sheet.TAGS)
  const [isDefault, setIsDefault] = useState(true)

  return <Box bg="accent" pos="relative">
    <Box id="portfolio" pos="absolute" top="-80px"/>
    <Container py="10vw" px="xl">
      <Title order={2} c="white" ta="center">{t('portfolio')}</Title>
      <Divider />
      {isDefault ? <>
        <Button
          fullWidth variant="light" size="md"
          onClick={() => setIsDefault(false)}
        >
          <Text c="white">{t('showAll')}</Text>
        </Button>
        <Section works={defaultWorks} tags={tags} lang={lang}/>
      </> :
        workTypes.map(type => {
          const filteredWorks = works.filter(w => w.type === type.id && w.display)
          const workType = workTypes.find(wt => type.id === wt.id)?.[lang] || type.id
          return <Section key={type.id} works={filteredWorks} tags={tags} type={workType} lang={lang}/>
        })
      }
    </Container>
  </Box>
}

export default Portfolio
