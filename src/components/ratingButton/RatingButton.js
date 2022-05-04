import styles from './rating.module.css'

export function RatingButton({ onSelectRating }) {
    return (
        <ul>
            <li><button className={styles.button} onClick={onSelectRating}>1</button></li>
            <li><button className={styles.button} onClick={onSelectRating}>2</button></li>
            <li><button className={styles.button} onClick={onSelectRating}>3</button></li>
            <li><button className={styles.button} onClick={onSelectRating}>4</button></li>
            <li><button className={styles.button} onClick={onSelectRating}>5</button></li>
        </ul>
    )
}