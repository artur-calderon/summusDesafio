import styles from './styles.module.css'


export function Card({ url, title, description, plane }) {
  return (
    <div className={styles.cardContainer}>
      <header>
        <img src={url} className={plane ? styles.plane : ''} alt="" />
      </header>
      <div className={styles.bodyCard}>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  )
}