import star from '../../assets/images/icon-star.svg'
import { Button } from '../button/Button'
import { Rating } from '../rating/Rating.js'
import styles from "./card.module.css";


export function Card() {
    return (
        <div class="card" className={styles.card}>
            <img src={star} />
            <h1 className={styles.heading}>How did we do?</h1>
            <p className={styles.paragraph}>
                Please let us know how we did with your support request. All feedback
                is appreciated to help us improve our offering!
            </p>
            <Rating />
            <Button />
        </div>
    )
}