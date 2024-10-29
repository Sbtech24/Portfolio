"use client"

import styles from "./footer.module.css"
import { IconBrandTwitter,IconBrandLinkedin,IconBrandGithub } from '@tabler/icons-react';
import Link from 'next/link';

const Footer = () => {

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <Link href="/"className={styles.link}>Home</Link>
        <div className={styles.iconsContainer}>
          <Link href="https://twitter.com/BajomoSemilore"passHref={true} className={styles.link}>Twitter</Link>
          <Link href="https://www.linkedin.com/in/oluwasemilore-bajomo-3a7087247/"passHref={true}className={styles.link}>LinkedIn</Link>
          <Link href="https://github.com/Sbtech24" passHref={true} className={styles.link}>Github</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer