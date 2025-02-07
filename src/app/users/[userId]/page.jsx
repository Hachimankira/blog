// 'use client';
import React from 'react'
import styles from '../userProfile.module.css'
import { Card } from '@/components/card/Card';
import Image from 'next/image';

const getData = async (userId) => {
    const res = await fetch(`http://localhost:3000/api/users/${userId}`, {
        cache: 'no-store',
    });

    if (!res.ok) {
        return new Error("failed");
    }
    return res.json();

}

const UserProfile = async ({ params }) => {
    const { userId } = params;
    const data = await getData(userId);
    // Destructure the user details and posts
    const { id, name, email, createdAt, image, Comment: comments, Post: posts } = data;

    const createdAtDate = new Date(createdAt);
    let createdMonth = createdAtDate.getMonth() + 1; // JavaScript months are 0-indexed
    createdMonth = createdMonth < 10 ? '0' + createdMonth : createdMonth; // Add leading zero if necessary
    const createdYear = createdAtDate.getFullYear().toString().slice(-2); // Get last two digits of year
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                {posts ?
                    <div className={styles.post}>
                        {posts.map((item) => (
                            <Card item={item} key={item._id} />
                        ))}
                    </div>
                    : <h1>No posts tet!!</h1>
                }
                <div className={styles.user}>
                    <div className={styles.cardContainer}>
                        <header className={styles.header}>
                            <Image src={image} alt={name} className={styles.img} width={100} height={100}/>
                        </header>
                        <div className={styles.details}>
                            <h1 className={styles.boldText}>
                                {name} <br />
                                <span className={styles.normalText}>{email}</span>
                            </h1>
                            {/* <h2 className="normal-text">{props.city}</h2> */}
                            <div className={styles.socialContainer}>
                                <div className={styles.followers}>
                                    <h1 className={styles.boldText}>{comments.length}</h1>
                                    <h2 className={styles.smallerText}>Engagement</h2>
                                </div>
                                <div className={styles.likes}>
                                    <h1 className={styles.boldText}>{createdMonth}/{createdYear} </h1>
                                    <h2 className={styles.smallerText}>Active Since</h2>
                                </div>
                                <div className={styles.photos}>
                                    <h1 className={styles.boldText}>{posts.length}</h1>
                                    <h2 className={styles.smallerText}>Posts</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default UserProfile;