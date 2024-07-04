import { Layout } from '@/components/dom/Layout'
import { Montserrat } from 'next/font/google'

import '@/globals.css'

export const metadata = {
  title: 'Suresh',
  description: 'Manufacture Consultant',
}

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
})


export default function RootLayout({ children }) {
  return (
    <html lang='en' className={`${montserrat.className} antialiased`}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
