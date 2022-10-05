
import styles from './styles.module.css'

import userAvatar from '../../assets/userAvatar.png'

export function Slider() {
    return (
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
    )
}