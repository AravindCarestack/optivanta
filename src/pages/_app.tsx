import '~/styles/global.css'

import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'
import { lazy } from 'react'

export interface SharedPageProps {
  draftMode: boolean
  token: string
}

const PreviewProvider = lazy(() => import('~/components/PreviewProvider'))

const sans = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export default function App({
  Component,
  pageProps,
}: AppProps<SharedPageProps>) {
  const { draftMode, token } = pageProps
  return (
    <>
      {draftMode ? (
        <PreviewProvider token={token}>
          <Component {...pageProps} className={sans.className} />
        </PreviewProvider>
      ) : (
        <Component {...pageProps} className={sans.className} />
      )}
    </>
  )
}
