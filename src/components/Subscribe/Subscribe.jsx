
import styles from './styles.module.css'

import arrowSend from '../../assets/arrowSend.png'

export function Subscribe() {
  return (
    <section className={styles.container}>
      <div className={styles.formContainer}>
        <div className={styles.overlay}></div>
        <span className={styles.arrowSend}>
          <img src={arrowSend} alt="" />
        </span>

        <h1>Subscribe to get information, latest news and other
          interesting offers about Cobham</h1>
        <form>
          <input type="
          text" placeholder='Your email' />
          <button>Subscribe</button>
        </form>
      </div>

    </section>
  )
}