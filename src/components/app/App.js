import styles from "./app.module.css";
import { Card } from '../card/Card.js'
import { ResultCard } from '../resultCard/ResultCard.js'
import { useState } from 'react';
import { SubmitButton } from '../submitButton/SubmitButton.js'
import { RatingButton } from '../ratingButton/RatingButton.js'

function App() {
    const [isSubmitClicked, setSubmitClicked] = useState(false);
    const [rating, setRating] = useState(undefined);

    function onSelectRating(rating) {
        setRating(rating)
    }

    function onSubmitClicked() {
        setSubmitClicked(true);
    }

    return (
        <div className={styles.container}>
            {!isSubmitClicked ? (
                <Card>
                    <RatingButton onSelectRating={onSelectRating} />
                    <SubmitButton onSubmitClicked={onSubmitClicked} />
                </Card>

            ) : (
                <ResultCard rating={rating} />
            )
            }
        </div>
    )
}

export default App;
