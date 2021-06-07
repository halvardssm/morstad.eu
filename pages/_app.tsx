import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Fragment } from 'react'
import { ThemeProvider } from 'next-themes'


function App({ Component, pageProps }: AppProps) {
  return <Fragment>
    <ThemeProvider attribute='class'>
      <Component {...pageProps} />
    </ThemeProvider>
  </Fragment>
}
export default App
