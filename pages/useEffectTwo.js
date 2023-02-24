import React from 'react'
import { useState, useEffect } from 'react'
import Navbar from '@/components/NavBar'
import styles from '../styles/useEffectTwo.module.css'

export default function useEffectTwo() {
    const [number, setNumber] = useState(0)
    // only runs once on page load. 
    useEffect(() => {
        console.log(number);
        setNumber(number+50);
    },[])
  return (
    <>
      <Navbar />
    <div className={styles.main}>
    
          <div className={styles.container}>

        <h2 className={styles.text}>Case 2: The empty array in useEffect indicates that the useEffect doesn't have any dependencies on any state variables. Therefore, the callback function is only called once the page renders in this case. 
          Application:  Fetch data from an API endpoint when the page renders.</h2>
       
          <p>The number initially was 0, after the first render, the current number is {number}</p>
        
          </div>
          
          
      </div>
    </>
  )
}
