import type { Metadata } from 'next'
import localFont from 'next/font/local'
import '@/style/globals.css'

import getCategories from '@/actions/get-categories'
import { ModalProvider } from '@/provider/modal-provider'
import Header from '@/components/header'

export const font = localFont({
  src: [
    {
      path: './fonts/HelveticaNeueLTStd-Roman.otf',
      style: 'normal',
    },
  ],
})

export const logo = localFont({
  src: [
    {
      path: './fonts/TypewriterInkedRegular.ttf',
      style: 'normal',
    },
  ],
  variable: '--font-logo',
})

export const metadata: Metadata = {
  title: 'Store',
  description:
    'The Store is a vital online platform for showcasing and selling products. Purchase and Rejoice.',
  authors: {
    name: 'Sky Rossel',
    url: 'https://github.com/skyrossel',
  },
}

export const revalidate = 0

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const categories = await getCategories()

  return (
    <html lang="en">
      <body className={`${font.className} ${logo.variable}`}>
        <ModalProvider />
        <Header categories={categories} />
        {children}
      </body>
    </html>
  )
}
