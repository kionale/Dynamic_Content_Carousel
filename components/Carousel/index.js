import React from 'react'
import Image from 'next/image'
import styles from './Carousel.module.css'
import { useState, useEffect } from "react"


export default function Carousel() {

    const [slideIndex, setSlideIndex] = useState(0)




    const changeImage = (direction) => {

        if (direction == 'backward') {
            if (slideIndex !== 0) {
                setSlideIndex(prev => prev - 1)
            } else { setSlideIndex(5) }
        }
        else {
            if (slideIndex !== 5) {
                setSlideIndex(prev => prev + 1)
            } else {
                setSlideIndex(0)
            }
        }
    }
    return (
        <div className={styles.main}
            style={{
            backgroundImage: "url(/carousel-images/" + slideIndex + ".jpg)",
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: 500,
            height: 300
        }}>
            <div className={styles.imageSection}>
                
                <Image
                    className={styles.arrowL}
                    src={"/icons/leftArrow.png"}
                    alt={"/icons/leftArrow.png"}
                    onClick={() => changeImage('backward')}
                    width={50}
                    height={50} />
                <Image
                    className={styles.arrowR}
                    src={"/icons/rightArrow.png"}
                    alt={"/icons/rightArrow.png"}
                    onClick={() => changeImage('forward')}
                    width={50}
                    height={50} />

            </div>
        </div>
    )
}
