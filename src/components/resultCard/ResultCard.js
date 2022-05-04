import styles from "../card/card.module.css";
import stylesSecond from "./resultCard.module.css"
import thankYouImage from '../../assets/images/illustration-thank-you.svg'


export function ResultCard({ rating }) {
    return (
        <div className={styles.card}>
            <div className={stylesSecond.forImage}>
                <img src={thankYouImage} className={stylesSecond.thankYouImage} />
            </div>
            <div className={stylesSecond.content}>
                <p className={stylesSecond.result}>You selected <span>{rating}</span> out of 5</p>
                <h1 className={stylesSecond.heading}>Thank you!</h1>
                <p className={stylesSecond.mainParagraph}> We appreciate you taking the time to give a rating. If you ever need more support,
                    don't hesitate to get in touch!</p>
            </div>
        </div>
    )
}