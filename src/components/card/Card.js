import star from '../../assets/images/icon-star.svg'
import styles from "./card.module.css";


export function Card({ children }) {
    return (
        <div className={styles.card}>
            <img src={star} className={styles.starImg} />
            <h1 className={styles.heading}>How did we do?</h1>
            <p className={styles.paragraph}>
                Please let us know how we did with your support request. All feedback
                is appreciated to help us improve our offering!
            </p>
            {children}
        </div>
    )
}