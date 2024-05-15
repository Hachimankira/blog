import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from './card.module.css'

export const Card = ({ key, item }) => {
    return (
        <div className={styles.container} key={key}>
            {item.img && (
                <div className={styles.imageContainer}>
                    <Image src={item.img} alt='img' fill />
                </div>
            )}

            <div className={styles.textContainer}>
                <div className={styles.detail}>
                    <span className={styles.date}>
                        {item.createdAt.substring(0, 10)} -{""}
                    </span>
                    <span className={styles.category}> {item.catSlug}</span>
                </div>
                <Link href={`/posts/${item.slug}`} >
                    <h1>{item.title}</h1>
                </Link>
                <p className={styles.desc}>{item.desc}</p>
                <Link href={`/posts/${item.slug}`} className={styles.link}>Read More</Link>
            </div>
        </div>
    )
}
