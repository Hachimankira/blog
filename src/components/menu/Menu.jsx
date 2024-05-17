import React from 'react'
import styles from './menu.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { MenuPosts } from '../menuPosts/MenuPosts'
import { MenuCategories } from '../menuCategories/MenuCategories'

const getData = async () => {
  const res = await fetch(`http://localhost:3000/api/editor`, {
      cache: 'no-store',
  });

  // if (!res.ok) {
  //   throw new Error("Failed");
  // }
  return res.json();
}

export const Menu = async () => {
  const editorChoice =await getData();
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>What&apos;s hot</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <MenuPosts withImage={false} />


      <h2 className={styles.subtitle}>Discover by topic.</h2>
      <h1 className={styles.title}>Categories</h1>
      <MenuCategories />

      <h2 className={styles.subtitle}>Choosen by the editor</h2>
      <h1 className={styles.title}>Editor Pick</h1>
      <MenuPosts withImage={true} posts={editorChoice}/>
    </div>
  )
}
