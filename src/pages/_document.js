import { Html, Head, Main, NextScript } from 'next/document'
import NavigationBar from '@/components/elements/NavigationBar'


export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <NavigationBar/>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
