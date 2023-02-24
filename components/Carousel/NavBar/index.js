import React from 'react'
import Link from 'next/link'
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <div className={styles.main}>
      <div className={styles.navbar}>
        <div className={styles.brandTitle}>Kiona's blog</div>
        <a href='#' className={styles.toggle_button}>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </a>
        <div className={styles.navbar_links}>
          <ul>
            <li>
              <Link href='/'>Home</Link></li>
            <li><Link href="/useEffectOne">useEffectOne</Link></li>
            <li><Link href="/useEffectTwo">useEffectTwo</Link></li>
            <li><Link href="/useEffectThree">useEffectThree</Link></li>
            <li><Link href="/carouselPage">Carousel Page</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
