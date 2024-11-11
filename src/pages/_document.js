import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        <footer className='py-10 bg-bgDark'>
          <p className='text-center text-bgLight text-sm'>© 2024 HarmonicWeb. All rights reserved.</p>
        </footer>
      </body>
    </Html>
  )
}
