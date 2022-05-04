import styles from "./app.module.css";
import { Card } from '../card/Card.js'
import { SecondCard } from '../secondCard/SecondCard.js'
import { useState } from 'react';

function App() {
    const [isSubmitClicked, setSubmitClicked] = useState(false);
    const [rating, setRating] = useState('');

    function RatingSelected(event) {
        setRating(event.target.innerText)
    }

    function whenSubmitClicked() {
        setSubmitClicked(true);
    }

    return (
        <div className={styles.container}>
            {!isSubmitClicked ? (
                <Card
                    whenSubmitClicked={whenSubmitClicked}
                    RatingSelected={RatingSelected}
                />
            ) : (
                <SecondCard rating={rating} />
            )
            }
        </div>
    )
}

export default App;
