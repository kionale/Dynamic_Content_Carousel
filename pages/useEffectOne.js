import React, { useEffect, useState } from 'react'
import Navbar from '@/components/NavBar';
import styles from '../styles/useEffectOne.module.css'


export default function useEffectOne() {

    const [number, setNumber] = useState(0)
    //keeps on running in the background acts like an infinite loop
    useEffect(() => {
        console.log(number);
        // setNumber(number + 1) 
    })
    return (
        <>
            <Navbar />
            <div className={styles.main}>

                <div className={styles.container}>
                    <h2>Case 1: useEffect will guarantee that it will always run after the render, it also makes sure that every other component that needs to re-render will finish rendering before running the effect.
                        In this case, setNumber function will create an infinite loop since it keeps incrementing after each render iteration, which raises my  <span className={styles.span}> hear beat </span>so mush so i comment it out :(
                    </h2>
                    <p>
                        The current number is {number}
                    </p>

                </div>
            </div>
        </>
    )
}
