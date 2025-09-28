import React from 'react'
import { createRoot } from 'react-dom/client'
import { colorsTuple, createTheme, Loader, MantineProvider } from '@mantine/core'

import App from './App.tsx'

import '@mantine/core/styles.css'
import '@mantine/dates/styles.css'
import '@/assets/styles/main.sass'
import '@/i18n'

const theme = createTheme({
  colors: {
    accent: colorsTuple('#af8d53'),
    dark: colorsTuple('#4b3f26'),
  },
  primaryColor: 'accent',
  radius: {
    0: '0px',
  },
  fontFamily: 'Context, serif',
  components: {
    Loader: Loader.extend({
      defaultProps: {
        loaders: {
          ...Loader.defaultLoaders,
          // custom: Loading,
        },
        type: 'custom',
      },
    }),
  },
})

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider theme={theme} defaultColorScheme="light">
      <App />
    </MantineProvider>
  </React.StrictMode>,
)
