import React from 'react'
import { useState, useEffect } from "react"
import Carousel from '../components/Carousel'
import Navbar from '@/components/NavBar'
import styles from '../styles/carouselPage.module.css'

export default function carouselPage() {
  return (
    <div className={styles.main}>
      <Navbar />
      
      <div className={styles.container}>
        <div className={styles.carousel}> <Carousel /></div>
        <div>
          <h1>Carousel Page</h1>
     </div>
        
        
      </div>
    </div>
  )
}
