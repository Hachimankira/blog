"use client"
import Link from 'next/link';
import styles from './authLinks.module.css'
import { useState } from 'react';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';


// const logout = (event) => {
//     const router = useRouter();
//     event.preventDefault(); // Prevent the default action (navigation)
//     localStorage.removeItem('user'); // Remove the user from local storage
//     router.push('/login'); // Navigate to the login page
// };

const AuthLinks = () => {
    const { status } = useSession();
    console.log(status);
    const [open, setOpen] = useState(false)
    return (
        <>
            {status === "unauthenticated" || !status ? (
                <Link href="/login">Login</Link>
            ) : (
                <>
                    <Link href="/write">Write</Link>

                    <Link className={styles.link} onClick={signOut} href="/logout">Logout</Link>                </>
            )}
            <div className={styles.burger} onClick={() => setOpen(!open)}>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
            </div>
            {open && (
                <div className={styles.responsiveMenu}>
                    <Link href="/">Home</Link>
                    <Link href="/contact">Contact</Link>
                    <Link href="/about">About</Link>
                    {status === "unauthenticated" ? (
                        <Link href="/login">Login</Link>
                    ) : (
                        <>
                            <Link href="/write">Write</Link>
                            <span className={styles.link} onClick={signOut}>Logout</span>
                        </>
                    )}
                </div>
            )}
        </>
    )
};

export default AuthLinks;