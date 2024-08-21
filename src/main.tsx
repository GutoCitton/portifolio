import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { CssBaseline, GlobalStyles, ThemeProvider } from '@mui/material'
import theme from './theme.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles
      styles={{
        html: {
          scrollSnapType: 'y mandatory',
        },
      }}
    />
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
