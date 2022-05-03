import styles from './rating.module.css'

export function Rating() {
    return (
        <ul>
            <li><button className={styles.button}>1</button></li>
            <li><button className={styles.button}>2</button></li>
            <li><button className={styles.button}>3</button></li>
            <li><button className={styles.button}>4</button></li>
            <li><button className={styles.button}>5</button></li>
        </ul>
    )
}