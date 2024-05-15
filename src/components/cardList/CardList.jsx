import React from 'react'
import styles from './cardList.module.css'
import { Pagination } from '../pagination/Pagination'
import { Card } from '../card/Card'



const getData = async (page ,cat) => {
  const res = await fetch(`http://localhost:3000/api/posts?page=${page}&cat=${cat || ""}`, {
    cache: 'no-store',
  });

  // if (!res.ok) {
  //   throw new Error("Failed");
  // }
  return res.json();
}

export const CardList = async ({ page, cat }) => {
  const { posts, count } = await getData(page, cat);

  const POST_PER_PAGE = 2;

  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count; //logic for pagination in client side rendering
  return (
    <div className={styles.container}>
      {posts?.map((item) => (
        <Card item={item} key={item._id} />
      ))}
      <Pagination page={page} hasNext={hasNext} hasPrev={hasPrev} />
    </div>
  )
};
