import React from 'react'
import { useEffect, useState } from 'react'
import Navbar from '@/components/NavBar';
import styles from '../styles/useEffectThree.module.css'

export default function useEffectThree() {

    const [number, setNumber] = useState(0);
    const [value, setValue] = useState(-10);

    // get triggered once on page load. that makes value: 0 at the initial render, it will only
    // run again whenever the value of number changes which is when the btn is clicked
    useEffect(() => {
        setValue(value + 10)
    }, [number])
    return (
        <>
            <Navbar />
            <div className={styles.main}>

                <div className={styles.container}>

                    <h1 className={styles.text}>There is a dependency array so this will only be called first when the component is being mounted and second if the dependency in that array, which is number, changes.</h1>
                    <h4>Eg: value is initially -10 but updated to 0 because of the first render of useEffect. Whenever the 'click me' button gets clicked,
                        number will increment by 1 and triggers setValue function which increments value by 10. Click the button to try.</h4>
                    <button onClick={() => setNumber(prev => prev + 1)} className={styles.btn}>Click me</button>

                    <h3>number is {number}</h3>
                    <h3>value is {value}</h3>
                </div>
            </div>
        </>
    )
}
