import Image from 'next/image'
import styles from './singlePage.module.css'
import { Menu } from '@/components/menu/Menu'
import { Comments } from '@/components/comments/Comments'

const SinglePage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                    <div className={styles.user}>
                        <div className={styles.userImageContainer}>
                            <Image src="/p1.jpeg" alt='img' fill className={styles.avatar} />
                        </div>
                        <div className={styles.userTextContainer}>
                            <span className={styles.username}>Kiran Shrestha</span>
                            <span className={styles.date}>10.03.2024</span>

                        </div>
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <Image src="/p1.jpeg" alt='img' fill className='styles.image' />
                </div>

            </div>
            <div className={styles.content}>
                <div className={styles.post}>
                    <div className={styles.description}>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti provident quos quae nobis natus beatae facilis illo, adipisci magnam facere nisi, dolorum laboriosam minus distinctio saepe placeat voluptates? Aspernatur, sunt.</p>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi cum porro, recusandae fugit numquam eum beatae vero illo sint id voluptatem maiores corporis aliquam totam? Culpa eveniet nostrum excepturi voluptatum.</p>
                    </div>
                </div>
                <div className={styles.comment}>
                    <Comments />
                </div>
                <Menu />
            </div>

        </div>
    )
}

export default SinglePage
