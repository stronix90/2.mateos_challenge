import Link from 'next/link'
import styles from './index.module.scss'

const Header = () => {
  return (
    <nav className={styles.nav}>
        <ul>
            <li><Link href="/">Lottery Tickets</Link></li>
            <li><Link href="/contact">Contact</Link></li>
        </ul>
    </nav>
  )
}

export default Header