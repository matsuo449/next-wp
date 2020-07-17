import '../styles/style.css'
import Head from 'next/head'

// compornents
import Header from '../components/header'
import Footer from '../components/footer'

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}