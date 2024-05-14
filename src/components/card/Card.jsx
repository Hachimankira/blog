import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from './card.module.css'

export const Card = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image src="/p1.jpeg" alt='img' fill />
            </div>
            <div className={styles.textContainer}>
                <div className={styles.detail}>
                    <span className={styles.date}>10.03.2024</span>
                    <span className={styles.category}> Development</span>
                </div>
                <Link href="/">
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                </Link>
                <p className={styles.desc}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus unde porro officia. Placeat eos rem distinctio illum corrupti.</p>
                <Link href="/" className={styles.link}>Read More</Link>
            </div>
        </div>
    )
}
