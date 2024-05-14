import React from 'react'
import styles from './navbar.module.css'
import ThemeToggle from '../themeToggle/ThemeToggle'
import AuthLinks from '../authLinks/AuthLinks'
import Image from 'next/image'

export const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image src="/facebook.png" alt="facebook" width={24} height={24} />
        <Image src="/instagram.png" alt="facebook" width={24} height={24} />
        <Image src="/tiktok.png" alt="tiktok" width={24} height={24} />
        <Image src="/youtube.png" alt="youtube" width={24} height={24} />
      </div>
      <div className={styles.logo}>HachiBlog</div>
      <div className={styles.links}>
        <ThemeToggle />
        <a href="/" className={styles.link}>Homepage</a>
        <a href="/contact" className={styles.link}>Contact</a>
        <a href="/about" className={styles.link} >About</a>
        <AuthLinks />
      </div>
    </div>
  )
}
