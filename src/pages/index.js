import SlideCodeSurvey from '@/components/SlideCodeSurvey'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
        <title>Introducing 😍 HarmonicWeb: Solving problems and improving life through Tech! 🚀</title>
        <meta name="description" content="Trying to solve a problem in Tech? Harmonic Web Gat you covered.🌟"/>
        <meta name="keywords" content="blogging platform, blog, bloggers, customizable, feature-rich, user-friendly, SEO, technology blog, tech news, updates, insights"/>
        <link rel="icon" href="/logo.png"/>
        <meta name="theme-color" content="#073c50"/>
        <meta property="og:title" content="Introducing 😍 HarmonicWeb: Solving problems and improving life through Tech! 🚀"/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://harmonic-web.vercel.app"/>
        <meta property="og:image" content="/logo.png"/>
        <meta property="og:description" content="Trying to solve a problem in Tech? Harmonic Web Gat you covered.🌟"/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:title" content="Introducing 😍 HarmonicWeb: Solving problems and improving life through Tech! 🚀"/>
        <meta name="twitter:image" content="/logo.png"/>
        <meta name="twitter:description" content="Trying to solve a problem in Tech? Harmonic Web Gat you covered.🌟"/>
      </Head>

      <main className='py-10 md:py-10 px-5 md:px-32 bg-communitywave bg-bgLight'>
        <SlideCodeSurvey/>
      </main>
    </>
  )
}
