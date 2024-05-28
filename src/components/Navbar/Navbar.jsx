import React from 'react'
import Link from 'next/link'
import styles from "./navbar.module.css"

const Navbar = () => {
  return (
    <div className={styles.container}>
        <nav className={styles.nav}>
           <Link href="/" className={styles.link}>Lorey</Link>
           <Link href="spotify.com" className={styles.link} passHref={true}>Spotify</Link>       
        </nav>
    </div>
  )
}

export default Navbar