import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from "swiper";


import styles from './styles.module.css'

// import "swiper/css";
import "swiper/css/pagination";

import userAvatar from '../../assets/userAvatar.png'

export function Slider() {
    return (
        <Swiper
            direction={"vertical"}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className={styles.mySwiper}
        >
            <SwiperSlide>
                <div className={styles.wraper}>
                    <div className={styles.avatar}>
                        <img src={userAvatar} alt="" />
                    </div>
                    <div className={styles.coment}>
                        <p>“On the Windows talking
                            painted pasture yet its express
                            parties use. Sure last upon he same
                            as knew next. Of believed or diverted no.”
                        </p>
                        <strong>Artur Calderon</strong>
                        <span>Ji-Paraná, Rndônia</span>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={styles.wraper}>
                    <div className={styles.avatar}>
                        <img src={userAvatar} alt="" />
                    </div>
                    <div className={styles.coment}>
                        <p>“On the Windows talking
                            painted pasture yet its express
                            parties use. Sure last upon he same
                            as knew next. Of believed or diverted no.”
                        </p>
                        <strong>Artur Calderon</strong>
                        <span>Ji-Paraná, Rndônia</span>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={styles.wraper}>
                    <div className={styles.avatar}>
                        <img src={userAvatar} alt="" />
                    </div>
                    <div className={styles.coment}>
                        <p>“On the Windows talking
                            painted pasture yet its express
                            parties use. Sure last upon he same
                            as knew next. Of believed or diverted no.”
                        </p>
                        <strong>Artur Calderon</strong>
                        <span>Ji-Paraná, Rndônia</span>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>

    )
}