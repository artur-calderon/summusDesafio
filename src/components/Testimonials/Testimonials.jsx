
import { Slider } from '../Slider/Slider'


import styles from './styles.module.css'


export function Testimonials() {
    return (
        <section className={styles.container}>
            <div className={styles.testimonialsTitle}>
                <span>Testimonials</span>
                <h1>What people say<br />
                    about Us.</h1>
            </div>
            <Slider />
        </section>
    )
}