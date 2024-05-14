import React from 'react';
import styles from './blogpage.module.css';
import { CardList } from '../../components/cardList/CardList';
import { Menu } from '../../components/menu/Menu';


const BlogPage = () => {
  return (
    <div>
        <h1 className={styles.title}>Styles Blog</h1>
        <div className={styles.content}>
            <CardList />
            <Menu />
        </div>
    </div>
  );
}

export default BlogPage