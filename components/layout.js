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
      <main>{children}</main>
    </div>
  )
}

export default Layout
