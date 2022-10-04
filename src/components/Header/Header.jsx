
import JadooLogo from '../../assets/Jadoo_logo.png'
import Viajante from '../../assets/Viajante.png'
import PlayLogo from '../../assets/Play_button.png'

import styles from './styles.module.css'

export function Header() {
  return (
    <div className={styles.headerBack}>
      <div className={styles.container}>
        <header className={styles.header}>
          <img src={JadooLogo} alt="" />
          <ul>
            <li>Destinations</li>
            <li>Hotels</li>
            <li>Flights</li>
            <li>Bookings</li>
          </ul>
          <div className={styles.login}>
            <span>Login</span>
            <span className={styles.signUp}>Sign up</span>
            <span>EN</span>
          </div>
        </header>
        <section className={styles.info}>
          <div className={styles.text}>
            <h3>Best Destinations around the world</h3>
            <h1>
              <span>Travel, enjoy</span><br />
              and live a new<br />
              and full life
            </h1>
            <p>Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</p>
            <div className={styles.buttons}>
              <button>Find out more</button>
              <div className={styles.play}><img src={PlayLogo} /><p>Play Demo</p></div>
            </div>
          </div>
          <img src={Viajante} alt="" />
        </section>
      </div>
    </div>
  )
}