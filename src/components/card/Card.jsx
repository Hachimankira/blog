import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from './card.module.css'

export const Card = ({key, item}) => {
    return (
        <div className={styles.container} key={key}>
            <div className={styles.imageContainer}>
                <Image src={item.img} alt='img' fill />
            </div>
            <div className={styles.textContainer}>
                <div className={styles.detail}>
                    <span className={styles.date}>{item.createdAt}</span>
                    <span className={styles.category}> {item.cat}</span>
                </div>
                <Link href="/">
                    <h1>{item.title}</h1>
                </Link>
                <p className={styles.desc}>{item.decs}</p>
                <Link href="/" className={styles.link}>Read More</Link>
            </div>
        </div>
    )
}
