import styles from './rating.module.css'

export function RatingButton({ onSelectRating }) {

    const ratingScale = [
        {
            id: 0,
            value: 1,
        },
        {
            id: 1,
            value: 2,
        },
        {
            id: 2,
            value: 3,
        },
        {
            id: 3,
            value: 4,
        },
        {
            id: 4,
            value: 5,
        },
    ];

    const ratingPreview = ratingScale.map((rating) =>
        <li>
            <button
                className={styles.button}
                onClick={() => onSelectRating(rating.value)}>
                {rating.value}
            </button>
        </li>
    );

    return (
        <ul>
            {ratingPreview}
        </ul>
    )
}