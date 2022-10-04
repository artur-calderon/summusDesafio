
import { Card } from '../Card/Card'
import styles from './styles.module.css'

// Category images
import satelite from '../../assets/satelite.png'
import Plane from '../../assets/plane.svg'
import Microfone from '../../assets/micro.png'
import Engrenagem from '../../assets/engrenagem.png'


export function CategorySection() {
  return (
    <section className={styles.categoryBack}>
      <article className={styles.container}>
        <div className={styles.content}>
          <div className={styles.cabecalho}>
            <span>CATEGORY</span>
            <h1>We Offer Best Services</h1>
          </div>
          <div className={styles.cards}>
            <Card url={satelite} title='Calculated Weather' description='Built Wicket longer admire do barton vanity itself do in it.' />
            <Card url={Plane} title='Best Flights' description='Engrossed listening. Park gate sell they west hard for the.' />
            <Card url={Microfone} title='Local Events' description='Barton vanity itself do in it. Preferd to men it engrossed listening. ' />
            <Card url={Engrenagem} title='Customization' description='We deliver outsourced
aviation services for
military customers' />
          </div>
        </div>
      </article>
    </section>
  )
}