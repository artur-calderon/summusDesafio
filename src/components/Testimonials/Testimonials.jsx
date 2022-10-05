
import { Slider } from '../Slider/Slider'



import styles from './styles.module.css'
// import "swiper/css";
// import "swiper/css/pagination";


import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from "swiper";

export function Testimonials() {
    return (
        <section className={styles.container}>
            <div className={styles.testimonialsTitle}>
                <span>Testimonials</span>
                <h1>What people say<br />
                    about Us.</h1>
            </div>
            {/* <Swiper
                direction={"vertical"}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide><Slider /></SwiperSlide>
                <SwiperSlide><Slider /></SwiperSlide>
                
                
            </Swiper> */}
            <Slider/>
        </section>
    )
}