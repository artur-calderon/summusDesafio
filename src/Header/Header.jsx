
import JadooLogo from '../assets/Jadoo_logo.png'
import Viajante from '../assets/Viajante.png'
import styles from './styles.module.css'

export function Header() {
  return (
    <div className={styles.headerBack}>
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
      <div className={styles.info}>
        <div className={styles.text}>
          <h3>Best Destinations around the world</h3>
          <h1>Travel, enjoy
            and live a new
            and full life</h1>
        </div>
        <img src={Viajante} alt="" />
      </div>
    </div>
  )
}