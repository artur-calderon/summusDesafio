
import styles from './styles.module.css'

import Example from '../../assets/example.svg'
import choose from '../../assets/choose.png'
import airPort from '../../assets/airPort.png'
import make from '../../assets/make.png'

export function ExampleSection() {
    return (
        <section className={styles.container}>
            <div className={styles.example}>
                <span>Easy and Fast</span>
                <h1>Book your next trip
                    in 3 easy steps</h1>
                <ul>
                    <li>
                        <img src={choose} alt="" />
                        <div>
                            <strong>Choose Destination</strong>
                            <p>Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Urna, tortor tempus.</p>
                        </div>
                    </li>
                    <li>
                            <img src={airPort} alt="" />
                        <div>
                            <strong>Make Payment</strong>
                            <p>Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Urna, tortor tempus.</p>
                        </div>
                    </li>
                    <li>
                            <img src={make} alt="" />
                        <div>
                            <strong>Reach Airport on Selected Date</strong>
                            <p>Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Urna, tortor tempus.</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div className={styles.imageExample}>
                <img src={Example} alt="" />
            </div>
        </section>
    )
}