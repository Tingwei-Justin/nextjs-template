import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { FC, useEffect, useState } from 'react'

const Noop: FC = ({}) => <>{}</>

function MyApp({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).Layout || Noop
  return (
    <Layout pageProps={pageProps}>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
