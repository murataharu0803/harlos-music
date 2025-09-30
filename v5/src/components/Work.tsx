import { PortfolioWork } from '@/hooks/useData'
import { Badge, Box, Card, Group, Stack, Text } from '@mantine/core'
import { IconBrandYoutubeFilled, IconMusic, IconBrandSoundcloud } from '@tabler/icons-react'
import React from 'react'

interface WorkProps extends PortfolioWork {
  tagsText: string[]
}

const Work: React.FC<WorkProps> = work => {
  const iconProps = (href: string) => ({
    className: 'icon-hover',
    size: 24,
    stroke: 1.5,
    onClick: () => window.open(href, '_blank'),
  })

  return <Card withBorder padding="sm" radius="md" >
    <Group align="stretch">
      <Box flex="1 0 0" h={{ base: 'auto', xs: '7.5rem' }}>
        <Group gap="0" mb={4}>{work.tagsText.map((tag, index) =>
          <Badge key={index} mr={4} mb={4} variant="outline" size="xs" c="dark">{tag}</Badge>,
        )}</Group>
        <Stack gap="0" c="dark">
          <Text>{work.name}</Text>
          <Text c="dimmed" fz="sm">{work.artist}</Text>
        </Stack>
      </Box>
      <Stack flex="0 0 auto" justify="flex-start" mr="-8px">
        {work.youtube && <IconBrandYoutubeFilled
          {...iconProps(`https://www.youtube.com/watch?v=${work.youtube}`)}
        />}
        {work.musescore && <IconMusic
          {...iconProps(`https://musescore.com/user/33060556/scores/${work.musescore}`)}
        />}
        {work.soundcloud && <IconBrandSoundcloud
          {...iconProps(`https://soundcloud.com/harlosmusic/${work.soundcloud}`)}
        />}
      </Stack>
    </Group>
  </Card>
}

export default Work
