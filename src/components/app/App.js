import styles from "./app.module.css";
import { Card } from '../card/Card.js'
import { ResultCard } from '../resultCard/ResultCard.js'
import { useState } from 'react';

function App() {
    const [isSubmitClicked, setSubmitClicked] = useState(false);
    const [rating, setRating] = useState('');

    function onSelectRating(event) {
        setRating(event.target.innerText)
    }

    function onSubmitClicked() {
        setSubmitClicked(true);
    }

    return (
        <div className={styles.container}>
            {!isSubmitClicked ? (
                <Card
                    onSelectRating={onSelectRating}
                    onSubmitClicked={onSubmitClicked}

                />
            ) : (
                <ResultCard rating={rating} />
            )
            }
        </div>
    )
}

export default App;
