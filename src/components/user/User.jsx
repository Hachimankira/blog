import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from './user.module.css'

const getData = async () => {
    const res = await fetch('http://localhost:3000/api/users', {
        cache: 'no-store',
    });

    if (!res.ok) {
        return new Error("failed");
    }
    return res.json();
}

export const TopContributors = async () => {
    const datas = await getData();


    return (
        <div className={styles.userList}>
            {datas.map((data) => (
                <Link href={`/users/${data.id}`} key={data._id}>
                    <div className={styles.user} >
                        {data?.image && (
                            <div className={styles.userImageContainer}>
                                <Image src={data.image} alt='img' fill className={styles.avatar} />
                            </div>
                        )}
                        <div className={styles.userTextContainer}>
                            <span className={styles.username}>{data.name}</span>
                            <span className={styles.date}>{data?.Post.length} posts</span>

                        </div>
                    </div>
                </Link>
            ))}

        </div>
    )
}