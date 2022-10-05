
import styles from './styles.module.css'


// images 
import alitalia from '../../assets/alitalia.png'
import axon from '../../assets/axon.png'
import expedia from '../../assets/expedia.png'
import jetstar from '../../assets/jetstar.png'
import quantas from '../../assets/quantas.png'

export function Brands() {
  return (
    <section className={styles.container}>
      <ul>
        <li>
          <img src={axon} className={styles.axon} alt="" />
        </li>
        <li>
          <img src={jetstar} className={styles.jetstar} alt="" />
        </li>
        <li>
          <img src={expedia} className={styles.expedia} alt="" />
        </li>
        <li>
          <img src={quantas} className={styles.quantas} alt="" />
        </li>
        <li>
          <img src={alitalia} alt="" />
        </li>

      </ul>
    </section>
  )
}