import styles from './rating.module.css'

export function RatingButton({ RatingSelected }) {
    return (
        <ul>
            <li><button className={styles.button} onClick={RatingSelected}>1</button></li>
            <li><button className={styles.button} onClick={RatingSelected}>2</button></li>
            <li><button className={styles.button} onClick={RatingSelected}>3</button></li>
            <li><button className={styles.button} onClick={RatingSelected}>4</button></li>
            <li><button className={styles.button} onClick={RatingSelected}>5</button></li>
        </ul>
    )
}