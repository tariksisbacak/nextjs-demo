import Navigation from '../components/navigation'
import Head from 'next/head'
import styles from './layout.module.css'

function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Basic</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width" />
      </Head>
      <Navigation></Navigation>
      <main>{children}</main>
      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <img src="/vercel.svg" alt="Vercel" className="logo" />
        </a>
      </footer>
    </div>
  )
}

export default Layout
