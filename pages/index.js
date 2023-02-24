import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/Carousel/NavBar'
import Image from 'next/image'
import { useState } from 'react'



export default function Home() {
  const [name, setName] = useState('')
  return (
    <>
      <Head>
        <title className={styles.myName}>Kiona's Blog</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
      </Head>
      <main className={styles.main}>
        <Navbar />
        <div className={styles.input}>
          <input
            onChange={e => setName(e.target.value)}
            placeholder="Enter your name"
          />
          <h1>Hey {name}, welcome to my blog</h1>
          <h3>Click on the navigation bar to learn about different usage of useEffect()</h3>
        </div>
        
      </main>
    </>
  )
}
