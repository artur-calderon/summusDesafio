import styles from './styles.module.css'
import arrow from '../../assets/arrow.png'

export function CardDestination({ url, title, description, price }) {
  return (
    <div className={styles.cardContainer}>
      <header>
        <img src={url} alt="" />
      </header>
      <div className={styles.bodyCard}>
        <div className={styles.title}>
          <strong>{title}</strong>
          <p>{price}</p>
        </div>
        <p><img src={arrow} alt="" />{description}</p>
      </div>
    </div>
  )
}