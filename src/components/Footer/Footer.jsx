
import styles from './styles.module.css'

// images
import facebooIcon from '../../assets/Facebook Icon.png'
import instagramIcon from '../../assets/instagram 1.png'
import twitterIcon from '../../assets/twitter.png'

import playStore from '../../assets/Google Play.png'
import appleStore from '../../assets/Play Store.png'

export function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.all}>
        <div className={styles.logo}>
          <h1>Jadoo.</h1>
          <p>Book your trip in minute, get full<br />
            Control for much longer.
          </p>
        </div>
        <div className={styles.contact}>
          <div>
            <strong>Company</strong>
            <ul>
              <li>About</li>
              <li>Careers</li>
              <li>Mobile</li>
            </ul>
          </div>
          <div>
            <strong>Contact</strong>
            <ul>
              <li>Help/FAQ</li>
              <li>Press</li>
              <li>Affilates</li>
            </ul>
          </div>
          <div>
            <strong>More</strong>
            <ul>
              <li>Airlinefees</li>
              <li>Airline</li>
              <li>Low fare tips</li>
            </ul>
          </div>
        </div>
        <div className={styles.social}>
          <div className={styles.icons}>
            <img src={facebooIcon} className={styles.facebook} alt="" />
            <div className={styles.instagram}>
              <img src={instagramIcon} alt="" />
            </div>
            <img src={twitterIcon} className={styles.twitter} alt="" />
          </div>
          <div className={styles.app}>
            <span>Discover our app</span>
            <div>
              <img src={playStore} alt="" />
              <img src={appleStore} alt="" />
            </div>
          </div>
        </div>
      </div>
      <span>All rights reserved@jadoo.co</span>
    </footer>
  )
}