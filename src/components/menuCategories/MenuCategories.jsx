import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from './menuCategories.module.css'

const getData = async () => {
    const res = await fetch('http://localhost:3000/api/categories', {
        cache: 'no-store',
    });

    if (!res.ok) {
        return new Error("failed");
    }
    return res.json();
}

export const MenuCategories = async () => {
    const data = await getData();
    return (
        <div className={styles.categoryList}>
           
            {data.map((item) => (
                <Link href={`/blog?cat=${item.slug}`} key={item._id}>
                    {item.title}
                </Link>
            ))}
        </div>
    )
}
