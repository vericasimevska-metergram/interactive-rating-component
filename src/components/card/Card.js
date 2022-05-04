import star from '../../assets/images/icon-star.svg'
import { SubmitButton } from '../submitButton/SubmitButton.js'
import { RatingButton } from '../ratingButton/RatingButton.js'
import styles from "./card.module.css";


export function Card({ whenSubmitClicked, RatingSelected }) {
    return (
        <div class="card" className={styles.card}>
            <img src={star} className={styles.starImg} />
            <h1 className={styles.heading}>How did we do?</h1>
            <p className={styles.paragraph}>
                Please let us know how we did with your support request. All feedback
                is appreciated to help us improve our offering!
            </p>
            <RatingButton RatingSelected={RatingSelected} />
            <SubmitButton whenSubmitClicked={whenSubmitClicked} />
        </div>
    )
}