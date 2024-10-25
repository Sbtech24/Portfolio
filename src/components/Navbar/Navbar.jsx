"use client"
import React from 'react'
import Link from 'next/link'
import styles from "./navbar.module.css"

import spotify from "/public/spotify.svg"
import Image from 'next/image'
import { useContext } from 'react'
import ThemeContext from '../Contexts/ThemeContext'
const Navbar = () => {
  
  const {theme,toggleTheme} = useContext(ThemeContext)


  return (
    <div className={styles.container}>
        <nav className={styles.nav}>
           {/* <Link href="/" className={styles.link}>Lorey</Link> */}
          <Image src={`/sun.svg`} width={20} height={20} alt='sun' onClick={toggleTheme} />
           <Link href="spotify.com" className={styles.link} passHref={true}>
          <div className={styles.spotify}>
          <Image src={spotify}/>
          <p>spotify</p>
          </div>    
           </Link>       
        </nav>
    </div>
  )
}

export default Navbar