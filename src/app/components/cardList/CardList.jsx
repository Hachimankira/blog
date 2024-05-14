import React from 'react'
import styles from './cardList.module.css'
import { Pagination } from '../pagination/Pagination'
import { Card } from '../card/Card'

export const CardList = () => {
  return (
    <div className={styles.container}>
      <Card />
      <Card />
      <Card />
      <Card />
      <Pagination />
    </div>
  )
}
