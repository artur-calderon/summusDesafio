
import { CardDestination } from '../CardDestination/CardDestination'
import styles from './styles.module.css'

// Top Selling images
import Rome from '../../assets/Rome.png'
import London from '../../assets/london.jpg'
import Europe from '../../assets/fullEurope.png'


export function TopSellingSection() {
  return (
    <section className={styles.categoryBack}>
      <article className={styles.container}>
        <div className={styles.content}>
          <div className={styles.cabecalho}>
            <span>Top Selling</span>
            <h1>Top Destinations</h1>
          </div>
          <div className={styles.cards}>
            <CardDestination url={Rome} title='Rome, Italy' description='10 Days Trip' price='$5.42k' />
            <CardDestination url={London} title='London, UK' description='12 Days trip' price='$4.2k' />
            <CardDestination url={Europe} title='Full Europe' description='28 Days Trip' price='$15k' />
          </div>
        </div>
      </article>
    </section>
  )
}