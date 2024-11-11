import SlideCodeSurvey from '@/components/SlideCodeSurvey'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
        <title>Introducing 😍 HarmonicWeb: The Ultimate Blogging Platform for Success! 🚀</title>
        <meta name="description" content="Are you a passionate blogger seeking to take your blogging journey to new heights? Look no further! Welcome to HarmonicWeb, a customizable and feature-rich blogging platform designed to empower bloggers like you. With a user-friendly interface, SEO standards, and a plethora of powerful tools, HarmonicWeb is the ultimate solution to all your blogging needs. 🌟"/>
        <meta name="keywords" content="blogging platform, blog, bloggers, customizable, feature-rich, user-friendly, SEO, technology blog, tech news, updates, insights"/>
        <link rel="icon" href="/logo.png"/>
        <meta name="theme-color" content="#073c50"/>
        <meta property="og:title" content="Introducing 😍 HarmonicWeb: The Ultimate Blogging Platform for Success! 🚀"/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://harmonic-web.vercel.app"/>
        <meta property="og:image" content="/logo.png"/>
        <meta property="og:description" content="Are you a passionate blogger seeking to take your blogging journey to new heights? Look no further! Welcome to HarmonicWeb, a customizable and feature-rich blogging platform designed to empower bloggers like you. With a user-friendly interface, SEO standards, and a plethora of powerful tools, HarmonicWeb is the ultimate solution to all your blogging needs. 🌟"/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:title" content="Introducing 😍 HarmonicWeb: The Ultimate Blogging Platform for Success! 🚀"/>
        <meta name="twitter:image" content="/logo.png"/>
        <meta name="twitter:description" content="Are you a passionate blogger seeking to take your blogging journey to new heights? Look no further! Welcome to HarmonicWeb, a customizable and feature-rich blogging platform designed to empower bloggers like you. With a user-friendly interface, SEO standards, and a plethora of powerful tools, HarmonicWeb is the ultimate solution to all your blogging needs. 🌟"/>
      </Head>

      <main className='py-10 md:py-10 px-5 md:px-32 bg-communitywave bg-bgLight'>
        <SlideCodeSurvey/>
      </main>
    </>
  )
}
