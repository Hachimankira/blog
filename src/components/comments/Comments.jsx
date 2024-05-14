import Link from 'next/link';
import styles from './comments.module.css';
import Image from 'next/image';

export const Comments = () => {
  const status = "authenticated";
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea
            className={styles.input}
            placeholder="Write your comment here"
          ></textarea>
          <button className={styles.button}>Submit</button>
        </div>
      ) : (
        <Link href="/login">Login to write comment</Link>
      )}
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt='img'
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>Kiran Shrestha</span>
              <span className={styles.date}>10.03.2024</span>
            </div>
          </div>
          <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus aperiam nisi, unde quisquam voluptatibus odio! Veniam nesciunt optio nam eaque incidunt sapiente assumenda facere quas? Ullam, obcaecati? Incidunt, at? Quia.</p>
        </div>

        {/* next commnet */}
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt='img'
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>Kiran Shrestha</span>
              <span className={styles.date}>10.03.2024</span>
            </div>
          </div>
          <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus aperiam nisi, unde quisquam voluptatibus odio! Veniam nesciunt optio nam eaque incidunt sapiente assumenda facere quas? Ullam, obcaecati? Incidunt, at? Quia.</p>
        </div>
      </div>
    </div>
  )
}
