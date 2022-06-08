import Link from 'next/link'
import styles from './nav.module.css'

function Navigation() {
  return (
    <nav>
      <Link href="/">
        <a>Ana Sayfa</a>
      </Link>
      |
      <Link href="/about">
        <a>Hakkımda</a>
      </Link>
    </nav>
  )
}

export default Navigation
