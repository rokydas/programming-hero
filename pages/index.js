import Head from 'next/head'
import Faq from './components/Faq'
import Footer from './components/Footer'
import Header from './components/Header'
import Heroes from './components/Heroes'
import Impact from './components/Impact'
import Learn from './components/Learn'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import XFactor from './components/XFactor'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Programming Hero</title>
      </Head>
      <Navbar />
      <Header />
      <Heroes />
      <Impact />
      <XFactor />
      <Learn />
      <Projects />
      <Faq />
      <Footer />
    </div>
  )
}
